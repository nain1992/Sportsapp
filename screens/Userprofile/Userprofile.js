import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Userprofile/main";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";
import Tabmenu from "../../globalComponents/Tabmenu";
import Postandfollowers from "./components/Postandfollowers";
import StandardButton from "../../globalComponents/StandardButton";

const Userprofile = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [isselected, setIsselected] = useState(0);
  let options = ["Photos", "Videos", "Tags"];

  const handleselection = (item, index) => {
    setIsselected(item);
  };

  return (
    <View style={styles.container}>
      <Homeheader title={"Profile"} navigation={props?.navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profilewrapper}>
          <View style={styles.profilepicbody}></View>
          <Text style={styles.nametext}>Adnan Rana</Text>
          <Text style={styles.username}>@adnanr</Text>
          <Text style={styles.introtext}>
            CEO of Sports{"\n"}I’m lucky and blessed.{"\n"}Hello, I’m Adnan!
          </Text>
        </View>
        <Postandfollowers
          onPress={() => props?.navigation?.navigate("Myfollowers")}
          onPressFollowing={() => props?.navigation?.navigate("Myfollowers")}
          posts={"40"}
          followers={"404"}
          following={"333"}
        />
        <StandardButton
          customStyles={styles.btnbody}
          title={"Edit Profile"}
          onPress={() => props?.navigation?.navigate("Editprofile")}
        />
        <View style={styles.photoswrapper}>
          {options?.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => handleselection(item)}
                key={index}
              >
                <Text
                  style={[
                    styles.textphotos,
                    {
                      color: isselected === item ? "#1B3434" : "#C4C4C4",
                    },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.postswrapper}>
          {[1, 1, 1, 1, 1]?.map((item, index) => {
            return <View key={index} style={styles.postbody}></View>;
          })}
        </View>
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Userprofile);

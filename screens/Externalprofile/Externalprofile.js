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
import { styles as _styles } from "../../styles/Externalprofile/main";
import { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";
import Tabmenu from "../../globalComponents/Tabmenu";
import StandardButton from "../../globalComponents/StandardButton";
import Postandfollowers from "./components/Postandfollowers";
import Supportbtn from "../Myprofile/components/Supportbtn";

const Externalprofile = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [isselected, setIsselected] = useState(0);
  const [isvideovisible, setisVideovisible] = useState(true);

  let options = ["Photos", "Videos", "Tags"];

  const handleselection = (item, index) => {
    console.log(item);
    setIsselected(item);
    if (item != "Videos") {
      setisVideovisible(true);
    } else {
      setisVideovisible(false);
    }
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
        <Postandfollowers posts={"40"} followers={"404"} following={"333"} />
        <View style={styles.btnswrapper}>
          <TouchableOpacity style={styles.btnbody}>
            <AntDesign name="user" size={15} color="#fff" />
            <Text style={styles.btntext}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate("Supportpage")}
            style={[
              styles.btnbody,
              {
                backgroundColor: "#FF9900",
              },
            ]}
          >
            <AntDesign name="heart" size={15} color="#fff" />
            <Text style={styles.btntext}>Donate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate("Chatpage")}
            style={[
              styles.btnbody,
              {
                backgroundColor: "#E4E4E4",
              },
            ]}
          >
            <Feather name="message-circle" size={15} color="#3B3B3B" />
            <Text
              style={[
                styles.btntext,
                {
                  color: "#3B3B3B",
                },
              ]}
            >
              Massege
            </Text>
          </TouchableOpacity>
        </View>
        <Supportbtn
          title={"Support"}
          btncolor
          onPress={() => props?.navigation?.navigate("Supportpage")}
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
        {isvideovisible ? (
          <View style={styles.postswrapper}>
            {[1, 1, 1, 1, 1]?.map((item, index) => {
              return <View key={index} style={styles.postbody}></View>;
            })}
          </View>
        ) : (
          <View style={styles.postswrapper}>
            {[1, 1, 1, 1, 1]?.map((item, index) => {
              return <View key={index} style={styles.videobody}></View>;
            })}
          </View>
        )}
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Externalprofile);

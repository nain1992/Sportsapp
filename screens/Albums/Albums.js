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
import { styles as _styles } from "../../styles/Albums/main";
import { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";
import Tabmenu from "../../globalComponents/Tabmenu";

const Albums = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [isselected, setIsselected] = useState("Albums");

  let options = ["Albums", "Photos", "Videos"];

  const handleselection = (item, index) => {
    setIsselected(item);
  };

  return (
    <View style={styles.container}>
      <Homeheader title={"Albums"} navigation={props?.navigation} />
      <ScrollView>
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
        <View style={styles.contentwrapper}>
          {[1, 1, 1, 1, 1, 1, 1, 1]?.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => props?.navigation?.navigate("Favouratealbum")}
                  style={styles.albumbody}
                ></TouchableOpacity>
                <Text style={styles.texttitle}>Recent</Text>
                <Text style={styles.textquantity}>1200</Text>
              </View>
            );
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
export default connect(mapStateToProps, {})(Albums);

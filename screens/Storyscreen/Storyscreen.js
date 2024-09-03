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
import { styles as _styles } from "../../styles/Storyscreen/main";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Tabmenu from "../../globalComponents/Tabmenu";
import { ImageBackground } from "react-native";

const Storyscreen = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/7.jpg")}
        style={styles.imagebg}
      >
        <View style={styles.storyposterwrapper}>
          <View style={styles.profilepicbody}>
            <Image
              source={require("../../assets/images/6.jpg")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={styles.nametext}>Adnan Rana</Text>
          </View>
          <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
            <AntDesign name="close" size={20} color="#3F72AF" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Storyscreen);

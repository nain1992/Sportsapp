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
import { styles as _styles } from "../../styles/Editprofile/main";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";
import Standardfield from "../../globalComponents/Standardfield";
import Field from "./components/Field";
import StandardButton from "../../globalComponents/StandardButton";

const Editprofile = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Homeheader title={"Profile"} navigation={props?.navigation} />
      <View style={styles.profilewrapper}>
        <View style={styles.profilepicbody}></View>
        <TouchableOpacity style={styles.uploadbtn}>
          <Image
            source={require("../../assets/icons/11.png")}
            style={{ height: "50%", width: "50%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldwrapper}>
        <Field title={"Username"} info={"Mike Lucky"} />
        <Field title={"Email"} info={"Mike@gmail.com"} />
        <Field title={"Location"} info={"Jakarta"} />
        <Field title={"Phone Number"} info={"+62 890123456789"} />
      </View>
      <View style={styles.btnwrapper}>
        <StandardButton
          customStyles={{ backgroundColor: "#3F72AF" }}
          title={"Update"}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Editprofile);

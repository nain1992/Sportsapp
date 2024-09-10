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
import * as ImagePicker from "expo-image-picker";

const Editprofile = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Photos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Homeheader title={"Profile"} navigation={props?.navigation} />
      <View style={styles.profilewrapper}>
        <View style={styles.profilepicbody}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : null}
        </View>

        <TouchableOpacity onPress={pickImage} style={styles.uploadbtn}>
          <Image
            source={require("../../assets/icons/1.png")}
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
          onPress={() => props?.navigation?.navigate("Professionalprofile")}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Editprofile);

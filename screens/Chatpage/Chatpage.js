import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Chatpage/main";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";
import Incoming from "./components/Incoming";
import Outgoing from "./components/Outgoing";
import Typemsg from "../../globalComponents/Typemsg";
import * as ImagePicker from "expo-image-picker";

const Chatpage = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [msg, setMsg] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Photos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <Homeheader title={"Bobby Clay"} navigation={props?.navigation} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Incoming msgincoming={"Thank you for accepting me as a friend"} />
        <Outgoing msgoutgoing={"Yes anet with pleasure and i am also happy"} />
        <Incoming
          msgincoming={"I hope we will be friends forever, friends of life"}
        />
        <Outgoing msgoutgoing={"Sure, Thank you"} />
        <Outgoing audio />
      </ScrollView>

      <Typemsg
        placeholder="Write your message"
        placeholderTextColor={"#AAAAAA"}
        value={msg}
        onChangeText={(val) => setMsg(val)}
        multiline
        onIconPress={pickImage}
      />
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Chatpage);

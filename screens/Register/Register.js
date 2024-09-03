import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Register/main";
import { useState } from "react";
import {
  AntDesign,
  Ionicons,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Standardfield from "../../globalComponents/Standardfield";
import StandardButton from "../../globalComponents/StandardButton";

const Register = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pascode, setPascode] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.fixedcirclebody}></View>
      <TouchableOpacity
        onPress={() => props?.navigation?.goBack()}
        style={styles.backiconbody}
      >
        <Ionicons name="chevron-back" size={20} color="#AAB2B7" />
      </TouchableOpacity>
      <Text style={styles.signuptext}>Signup to create{"\n"}a new account</Text>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.fieldwrapper}>
          <Standardfield
            placeholder="First Name"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={name}
            onChangeText={(val) => setName(val)}
            multiline
          />
          <Standardfield
            placeholder="Last Name"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={lastname}
            onChangeText={(val) => setLastname(val)}
            multiline
          />
          <Standardfield
            placeholder="Date of birth"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={dateofbirth}
            onChangeText={(val) => setDateofbirth(val)}
            multiline
          />
          <Standardfield
            placeholder="Email"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={email}
            onChangeText={(val) => setEmail(val)}
            multiline
          />
          <Standardfield
            placeholder="Password"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={password}
            onChangeText={(val) => setPassword(val)}
            multiline
          />
          <Standardfield
            placeholder="Address"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={address}
            onChangeText={(val) => setAddress(val)}
            multiline
          />
          <Standardfield
            placeholder="Post Code"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={pascode}
            onChangeText={(val) => setPascode(val)}
            multiline
          />
        </View>
        <View style={styles.btnwrapper}>
          <StandardButton
            title={"Continue"}
            onPress={() => props?.navigation?.navigate("Phoneverification")}
          />
          <Text style={styles.ortext}> Or sigunup with social network</Text>
          <View style={styles.socialbtnwrapper}>
            <TouchableOpacity style={styles.socialbtnbody}>
              <AntDesign name="google" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialbtnbody}>
              <EvilIcons name="sc-facebook" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialbtnbody}>
              <FontAwesome name="apple" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Register);

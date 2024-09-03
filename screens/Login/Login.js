import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Login/main";
import Standardfield from "../../globalComponents/Standardfield";
import { useState } from "react";
import StandardButton from "../../globalComponents/StandardButton";
import { AntDesign, FontAwesome, EvilIcons } from "@expo/vector-icons";

const Login = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.fixedcirclebody}></View>
      <View style={styles.logowrapper}>
        <View style={styles.logobody}>
          <Image
            source={require("../../assets/images/2.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.textwrapper}>
        <Text style={styles.welcometext}>Welcome back,</Text>
        <Text style={styles.gladtext}>We glad you're back !</Text>
      </View>
      <View style={styles.fieldwrapper}>
        <Standardfield
          placeholder="insert your username"
          placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
          value={name}
          onChangeText={(val) => setName(val)}
          multiline
        />
        <Standardfield
          placeholder="insert your password"
          placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
          value={password}
          onChangeText={(val) => setPassword(val)}
          multiline
        />
        <Text
          onPress={() => props?.navigation?.navigate("Forgotpassword")}
          style={styles.forgottext}
        >
          Forgot Password
        </Text>
        <StandardButton
          title={"Sign in"}
          onPress={() => props?.navigation?.navigate("Home")}
        />
      </View>
      <View style={styles.lowercontentwrapper}>
        <Text style={styles.continuetext}>Or continue with</Text>
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
        <Text style={styles.donttext}>Don’t have an account? Sign up!</Text>
        <Text
          onPress={() => props?.navigation?.navigate("Register")}
          style={styles.taptext}
        >
          Tap me to Sign Up!
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Login);

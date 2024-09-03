import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Forgotpassword/main";
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
import Header from "../../globalComponents/Header";
import Codefield from "../../globalComponents/Codefield";

const Forgotpassword = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [number, setNumber] = useState("");

  return (
    <View style={styles.container}>
      <Header
        title={"Forgot Password"}
        steps={"step 2 of 5"}
        navigation={props?.navigation}
      />
      <Text style={styles.enternumbertext}>Enter Phone Number</Text>
      <View style={styles.fieldwrapper}>
        <Standardfield
          fieldColor={"#DBE2EF"}
          placeholder="123@gmail.com"
          placeholderTextColor={"#1B3434"}
          value={number}
          onChange={(val) => setNumber(val)}
          multiline
        />
        <Text style={styles.codetext}>
          Please enter the verification code sent to the number entered above.
        </Text>
        <Codefield />
        <StandardButton
          title={"Verify Code"}
          //   onPress={() => props?.navigation?.navigate("Sportsselection")}
        />
        <Text style={styles.codetext}>
          Didn’t get a code?{" "}
          <Text
            //   onPress={}
            style={{ fontFamily: "Bold" }}
          >
            Resend Code
          </Text>
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Forgotpassword);

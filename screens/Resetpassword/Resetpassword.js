import { Text, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Resetpassword/main";
import { useState } from "react";
import Standardfield from "../../globalComponents/Standardfield";
import StandardButton from "../../globalComponents/StandardButton";
import Header from "../../globalComponents/Header";

const Resetpassword = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [number, setNumber] = useState("");

  return (
    <View style={styles.container}>
      <Header
        title={"Reset Password Password"}
        steps={"Fill"}
        navigation={props?.navigation}
      />
      <Text style={styles.enternumbertext}>Create a New Password</Text>
      <Text style={styles.codetext}>
        Your new password must be different from the previous one used
      </Text>

      <View style={styles.fieldwrapper}>
        <Text style={styles.yournewpassword}>
          Please Enter Your Email Addres
        </Text>

        <Standardfield
          fieldColor={"#DBE2EF"}
          placeholder="123@gmail.com"
          placeholderTextColor={"#1B3434"}
          value={number}
          onChange={(val) => setNumber(val)}
          multiline
        />
        <Text style={styles.yournewpassword}>
          Please Enter Your Email Addres
        </Text>

        <Standardfield
          fieldColor={"#DBE2EF"}
          placeholder="123@gmail.com"
          placeholderTextColor={"#1B3434"}
          value={number}
          onChange={(val) => setNumber(val)}
          multiline
        />

        <StandardButton
          title={"Verify Code"}
          onPress={() => props?.navigation?.navigate("Addsocialmedia")}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Resetpassword);

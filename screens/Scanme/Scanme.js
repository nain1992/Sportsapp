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
import { styles as _styles } from "../../styles/Scanme/main";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Scanme = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props?.navigation?.goBack()}
        style={styles.backbtn}
      >
        <Ionicons name="chevron-back" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.textscan}>
        Scan to check out my Social Media page!
      </Text>
      <View style={styles.qrcode}>
        <Image
          source={require("../../assets/images/Image.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Scanme);

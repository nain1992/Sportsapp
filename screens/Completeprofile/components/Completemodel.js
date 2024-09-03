import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Completeprofile/Completemodel";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

const Completemodel = (props) => {
  let { onPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <Modal transparent={true} animationType="slide">
      <View style={{ flex: 1, backgroundColor: "#00000aaa" }}></View>
      <View style={styles.container}>
        <View style={styles.picturebody}>
          <Image
            source={require("../../../assets/images/3.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textbody}>Profile Successfully Created!</Text>
        <Text style={styles.textbody2}>
          Congratulations! Your profile has been successfully created. You've
          taken the first step towards showcasing your unique identity in the
          online world.
        </Text>
        <TouchableOpacity onPress={onPress} style={styles.takemehomebtn}>
          <Text style={styles.btntext}>Take Me Home</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Completemodel);

import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Discover/Spotartist";
// import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Ionicons, Entypo, Fontisto } from "@expo/vector-icons";

const Spotartist = (props) => {
  let { title, profession } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.picturebody}></View>
      <Text style={styles.titletext}>{title}</Text>
      <Text style={styles.professiontext}>{profession}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Spotartist);

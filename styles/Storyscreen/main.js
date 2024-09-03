import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    imagebg: {
      height: getPercent(100, height),
      width: getPercent(100, width),
    },
    storyposterwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(10, height),
    },
    profilepicbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
      borderRadius: 100,
    },
    nametext: {
      fontFamily: "SemiBold",
      fontSize: rf(14),
      color: "#3F72AF",
    },
  });

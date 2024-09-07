import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(8, height),
    },

    iconbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
    },
    titletext: {
      fontFamily: "Bold",
      fontSize: rf(16),
      color: "#1B3434",
    },
    numberbody: {
      height: getPercent(4, height),
      width: getPercent(15, width),
      borderRadius: 100,
      backgroundColor: "#3F72AF",
      justifyContent: "center",
      alignItems: "center",
    },
    number: {
      fontFamily: "Bold",
      fontSize: rf(11),
      color: "#fff",
    },
  });

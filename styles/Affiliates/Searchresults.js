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
      justifyContent: "space-between",
      height: getPercent(14, height),
    },
    picbody: {
      height: getPercent(6, height),
      width: getPercent(6, height),
      marginRight: 8,
      backgroundColor: "#3F72AF",
      borderRadius: 100,
    },
    name: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: "#222",
    },
    btn: {
      height: getPercent(5, height),
      width: getPercent(30, width),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      backgroundColor: "#3F72AF",
      marginBottom: 5,
    },
    remove: {
      height: getPercent(5, height),
      width: getPercent(30, width),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      backgroundColor: "#FD4E4E",
    },
    btntext: {
      fontFamily: "Medium",
      fontSize: rf(16),
      color: "#fff",
    },
  });

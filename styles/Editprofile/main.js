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
    profilewrapper: {
      alignItems: "center",
    },
    profilepicbody: {
      height: getPercent(10, height),
      width: getPercent(10, height),
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
      marginBottom: 10,
    },
    uploadbtn: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "#3F72AF",
      justifyContent: "center",
      alignItems: "center",
    },
    fieldwrapper: {},
    btnwrapper: {
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: getPercent(4, height),
      alignItems: "center",
    },
  });

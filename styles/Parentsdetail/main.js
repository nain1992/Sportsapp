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
    fixedcirclebody: {
      height: getPercent(20, height),
      width: getPercent(20, height),
      overflow: "hidden",
      backgroundColor: "#F9F7F7",
      borderRadius: 100,
      position: "absolute",
      right: getPercent(-12, width),
      top: getPercent(-6, height),
    },
    backiconbody: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      margin: 15,
    },
    signuptext: {
      fontFamily: "Medium",
      fontSize: rf(23),
      color: "#171F24",
      paddingLeft: getPercent(5, width),
    },
    fieldwrapper: {
      alignItems: "center",
      justifyContent: "space-evenly",
      height: getPercent(65, height),
      marginVertical: 10,
    },
    btnwrapper: {
      height: getPercent(25, height),
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  });

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
    backbtn: {
      margin: getPercent(3, height),
    },
    textscan: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: "#171F24",
      textAlign: "center",
      marginVertical: getPercent(5, height),
    },
    qrcode: {
      height: getPercent(40, height),
      width: getPercent(40, height),
      overflow: "hidden",
      alignSelf: "center",
      marginVertical: getPercent(5, height),
    },
  });

import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(60, height),
      width: getPercent(90, width),
      position: "absolute",
      top: getPercent(20, height),
      backgroundColor: "#fff",
      borderRadius: 20,
      alignSelf: "center",
      padding: 10,
      alignItems: "center",
      justifyContent: "space-around",
    },
    picturebody: {
      height: getPercent(15, height),
      width: getPercent(15, height),
      overflow: "hidden",
      borderRadius: 100,
    },
    textbody: {
      fontFamily: "SemiBold",
      fontSize: rf(24),
      color: "#27364E",
      textAlign: "center",
    },
    textbody2: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#838FA0",
      textAlign: "center",
    },
    takemehomebtn: {
      height: getPercent(7, height),
      width: getPercent(40, width),
      borderRadius: 100,
      backgroundColor: "#507FFE",
      justifyContent: "center",
      alignItems: "center",
    },
    btntext: {
      fontFamily: "SemiBold",
      fontSize: rf(13),
      color: "#fff",
    },
  });

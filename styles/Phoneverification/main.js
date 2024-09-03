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
    enternumbertext: {
      fontFamily: "Bold",
      fontSize: rf(14),
      color: "#1B3434",
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
    },
    fieldwrapper: {
      alignItems: "center",
      height: getPercent(55, height),
      justifyContent: "space-around",
    },
    codetext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#4C4E55",
      textAlign: "center",
      marginVertical: 10,
    },
  });

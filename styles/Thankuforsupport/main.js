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
    iconbody: {
      height: getPercent(15, height),
      width: getPercent(15, height),
      alignSelf: "center",
      overflow: "hidden",
    },
    thankutext: {
      fontFamily: "Medium",
      fontSize: rf(25),
      color: "#272B2B",
      textAlign: "center",
    },
    share: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: getPercent(10, height),
    },
    shareiconbody: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      overflow: "hidden",
    },
    sharetext: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: "#3F72AF",
      marginLeft: 20,
    },

    btnwrapper: {
      alignItems: "center",
      marginVertical: 10,
    },
  });

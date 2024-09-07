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

    parentsdetailswrapper: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      borderRadius: 10,
      alignSelf: "center",
      paddingHorizontal: 10,
      justifyContent: "center",
      backgroundColor: "#D7DDE1",
      marginVertical: 4,
    },
    input: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#AAB2B7",
      width: "100%",
    },
    detailsbtnwrapper: {
      flex: 0.5,
      justifyContent: "space-around",
      alignItems: "center",
    },
  });

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
    logowrapper: {
      height: getPercent(23, height),
      width: getPercent(100, width),
      alignItems: "center",
      justifyContent: "flex-end",
    },
    logobody: {
      height: getPercent(12, height),
      width: getPercent(20, height),
      overflow: "hidden",
    },
    textwrapper: {
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(14, height),
      justifyContent: "center",
    },
    welcometext: {
      fontFamily: "SemiBold",
      fontSize: rf(24),
      color: "#000000",
    },
    gladtext: {
      fontFamily: "Regular",
      fontSize: rf(18),
      color: "#000000",
    },
    fieldwrapper: {
      paddingHorizontal: getPercent(5, width),
      height: getPercent(35, height),
      justifyContent: "space-around",
    },
    forgottext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "rgba(0, 0, 0, 0.5)",

      paddingLeft: 10,
    },
    continuetext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#1B3434",
      textAlign: "center",
      marginVertical: 4,
    },
    socialbtnwrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: getPercent(8, height),
    },
    socialbtnbody: {
      height: getPercent(6, height),
      width: getPercent(6, height),
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(27, 52, 52, 0.29)",
      marginHorizontal: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    donttext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#000000",
      textAlign: "center",
      marginVertical: 4,
    },
    taptext: {
      fontFamily: "Regular",
      fontSize: rf(15),
      color: "#000000",
      textAlign: "center",
      marginVertical: 4,
    },
    lowercontentwrapper: {
      flex: 0.8,
      justifyContent: "space-around",
    },
  });

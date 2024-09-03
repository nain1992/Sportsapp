import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

export const Tabmenustyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(9, height),
      width: getPercent(100, width),
      paddingHorizontal: getPercent(5, width),
      backgroundColor: "#3F72AF",
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      justifyContent: "space-between",
    },
    iconbody: {
      height: getPercent(2.5, height),
      width: getPercent(2.5, height),
      justifyContent: "center",
      alignItems: "center",
    },
  });
export const Homeheaderstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: getPercent(100, width),
      height: getPercent(10, height),
      flexDirection: "row",

      backgroundColor: "#fff",
      // paddingHorizontal: getPercent(5, width),
      paddingLeft: getPercent(5, width),
      alignItems: "center",
    },

    fixedcirclebody: {
      height: getPercent(25, height),
      width: getPercent(25, height),
      overflow: "hidden",
      backgroundColor: "#F9F7F7",
      borderRadius: 100,
      position: "absolute",
      right: getPercent(-18, width),
      top: getPercent(-10, height),
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
    },
    msgiconbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
      backgroundColor: "#DBE2EF",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      margin: 5,
      marginTop: getPercent(5, height),
    },
    logobody: {
      height: getPercent(7, height),
      width: getPercent(14, width),
      overflow: "hidden",
    },
    titletext: {
      fontFamily: "SemiBold",
      fontSize: rf(16),
      color: "#112D4E",
      marginLeft: 10,
    },
  });

export const standardfieldstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      backgroundColor: "#F5F5F5",
      borderRadius: 10,
      justifyContent: "center",
      paddingHorizontal: 10,
      marginVertical: 3,
    },
    input: {
      fontFamily: "Regular",
      width: "100%",
      fontSize: rf(11),
      color: "#000000",
    },
  });
//standardButton Styles starts here
export const standardButtonStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(8, height),
      width: getPercent(90, width),
      backgroundColor: "#FD4E4E",
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 6,
      },
      shadowOpacity: 2,
      shadowRadius: 1,
      elevation: 6,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: rf(15),
      fontFamily: "SemiBold",
      color: "#fff",
    },
  });

//loader Styles starts here
export const loaderStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      position: "absolute",
      left: 0,
      zIndex: 9999999,
      top: getPercent(20, height),
    },
  });

//  Header starts here

export const Headerstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: getPercent(100, width),
      height: getPercent(20, height),
      justifyContent: "center",
      backgroundColor: "#fff",
      // paddingHorizontal: getPercent(5, width),
      justifyContent: "space-evenly",
    },

    titletext: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: "#171F24",
      paddingLeft: getPercent(5, width),
    },
    steptext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#AAB2B7",
      paddingLeft: getPercent(5, width),
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
    linearbar: {
      height: 5,
      width: getPercent(90, width),
      alignSelf: "center",
      borderRadius: 100,
      overflow: "hidden",
    },
    background: {
      height: "100%",
      width: "100%",
      position: "absolute",
      overflow: "hidden",
    },
  });

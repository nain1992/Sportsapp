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
    nametext: {
      fontFamily: "Regular",
      fontSize: rf(20),
      color: "#3B3B3B",
    },
    username: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#3B3B3B",
    },
    introtext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#3B3B3B",
      textAlign: "center",
      marginVertical: 10,
    },
    btnswrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(2, width),
      height: getPercent(10, height),
      justifyContent: "space-between",
    },
    btnbody: {
      height: getPercent(7, height),
      width: getPercent(30, width),
      borderRadius: 10,
      backgroundColor: "#3F72AF",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    btntext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#fff",
      marginLeft: 5,
    },
    photoswrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(10, height),
    },
    textphotos: {
      fontFamily: "Bold",
      fontSize: rf(14),
      color: "#1B3434",
    },
    postswrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      paddingHorizontal: getPercent(5, width),
      marginBottom: getPercent(10, height),
    },
    postbody: {
      height: getPercent(20, height),
      width: getPercent(43, width),
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
      marginVertical: 4,
    },
    videobody: {
      height: getPercent(30, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
      marginVertical: 4,
    },
  });

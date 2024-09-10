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
    contentwrapper: {
      flexDirection: "row",
      // alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    albumbody: {
      height: getPercent(21, height),
      width: getPercent(41, width),
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
    },
    photobody: {
      height: getPercent(15, height),
      width: getPercent(28, width),
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
    },
    videobody: {
      height: getPercent(15, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
    },
    texttitle: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: "#3F72AF",
    },
    textquantity: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#3F72AF",
    },
  });

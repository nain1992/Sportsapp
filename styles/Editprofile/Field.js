import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: getPercent(5, width),
      marginVertical: 4,
    },
    titletext: {
      fontFamily: "Bold",
      fontSize: rf(15),
      color: "#1B3434",
    },
    fieldbody: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      borderRadius: 10,
      justifyContent: "center",
      paddingHorizontal: 10,
      backgroundColor: "#DBE2EF",
      marginVertical: 4,
    },
    infotext: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#1B3434",
    },
  });

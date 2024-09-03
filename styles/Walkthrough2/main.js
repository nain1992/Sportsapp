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

    Imagewrapper: {
      height: getPercent(60, height),
      width: getPercent(100, width),
      overflow: "hidden",
      justifyContent: "flex-end",
    },
    textwrapper: {
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
    },
    labletext: {
      fontFamily: "SemiBold",
      fontSize: rf(28),
      color: "#171F24",
      textAlign: "center",
    },
    lowertext: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#778087",
      textAlign: "center",
    },
    btnwrapper: {
      alignItems: "center",
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: getPercent(4, height),
    },
  });

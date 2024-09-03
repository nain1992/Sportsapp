import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#3F72AF",
    },
    welcometextwrapper: {
      paddingHorizontal: getPercent(5, width),
      flex: 0.4,
      justifyContent: "flex-end",
    },
    welcometext: {
      fontFamily: "Bold",
      fontSize: rf(32),
      color: "#F6F5EE",
    },
    circlewrapper: {
      //   height: getPercent(50, height),
      flex: 0.55,
      width: getPercent(90, width),
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignSelf: "center",
      alignContent: "flex-end",
    },
    circlebody: {
      height: getPercent(18, height),
      width: getPercent(18, height),
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "#fff",
    },
    skipbtnbody: {
      alignSelf: "center",
      flex: 0.1,
      justifyContent: "center",
    },
    skiptext: {
      fontFamily: "SemiBold",
      fontSize: rf(13),
      color: "#fff",
    },
  });

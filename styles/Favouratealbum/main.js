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
    headingwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(12, height),
      alignItems: "center",
    },
    titleheader: {
      fontFamily: "SemiBold",
      fontSize: rf(15),
      color: "#3F72AF",
      marginLeft: 10,
    },
    contentwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      flexWrap: "wrap",
      justifyContent: "center",
    },
    albumbody: {
      height: getPercent(14, height),
      width: getPercent(25, width),
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
      margin: 3,
    },
  });

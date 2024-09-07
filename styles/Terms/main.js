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
    heading: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: "#171F24",
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
    },
    termstext: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#778087",
      textAlign: "justify",
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
    },
    btnwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      marginVertical: 10,
    },
    acceptbtn: {
      height: getPercent(6, height),
      width: getPercent(40, width),
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FD4E4E",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    btntext: {
      fontFamily: "Bold",
      fontSize: rf(14),
      color: "#fff",
    },
    Decline: {
      height: getPercent(6, height),
      width: getPercent(40, width),
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#D7DDE1",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    btntext1: {
      fontFamily: "Bold",
      fontSize: rf(14),
      color: "#778087",
    },
  });

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
    sportslistwrapper: {
      //   alignItems: "center",
    },
    accounttitle: {
      fontFamily: "Bold",
      fontSize: rf(13),
      color: "#1B3434",
      paddingHorizontal: getPercent(5, width),
    },
    sportsfield: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      alignSelf: "center",
      backgroundColor: "#DBE2EF",
      borderRadius: 10,
      paddingHorizontal: 10,
      justifyContent: "center",

      marginVertical: 8,
    },
    sportsnametext: {
      fontFamily: "Regular",
      fontSize: rf(14),
      color: "#171F24",
      marginLeft: 10,
    },
    btnwrapper: {
      alignItems: "center",
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: 20,
    },
    input: {
      width: "100%",
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#1B3434",
    },
  });

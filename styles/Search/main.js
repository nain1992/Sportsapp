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
    filtertext: {
      fontFamily: "Medium",
      fontSize: rf(15),
      color: "#656565",
      paddingLeft: getPercent(5, width),
      marginVertical: getPercent(2, height),
    },
    filteroptinswrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
    },
    filteroptionbody: {
      height: getPercent(5, height),
      width: getPercent(25, width),
      borderRadius: 5,
      backgroundColor: "#3F72AF",
      justifyContent: "center",
      alignItems: "center",
    },
    filter: {
      fontFamily: "Medium",
      fontSize: rf(15),
      color: "#fff",
    },
  });

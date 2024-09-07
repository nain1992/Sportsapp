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
    premiumtext: {
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#33383B",
    },
    addnewofferbody: {
      height: getPercent(10, height),
      width: getPercent(90, width),
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#919597",
      alignSelf: "center",
      marginVertical: 8,
    },
    addtext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#919597",
    },
    btnwrapper: {
      alignItems: "center",
      flex: 1,
      marginBottom: 15,
      justifyContent: "flex-end",
    },
  });

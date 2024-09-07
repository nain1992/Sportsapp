import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(10, height),
      width: getPercent(90, width),
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 10,
      alignItems: "center",
      paddingHorizontal: 10,
      backgroundColor: "#fff",
      shadowColor: "#000",
      alignSelf: "center",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    suportbody: {
      height: getPercent(5, height),
      width: getPercent(30, width),
      borderRadius: 100,
      backgroundColor: "#209ED1",
      justifyContent: "center",
      alignItems: "center",
    },
    edittext: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: "#fff",
    },
    diamondbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      borderRadius: 10,
      backgroundColor: "#F4F4F4",
      justifyContent: "center",
      alignItems: "center",
    },
    textbody: {
      flex: 1,
      paddingLeft: 10,
    },
    premiumtext: {
      fontFamily: "Medium",
      fontSize: rf(9),
      color: "#919597",
    },
    monethly: {
      fontFamily: "Medium",
      fontSize: rf(9),
      color: "#919597",
    },
  });

import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(12, height),
      width: getPercent(90, width),
      alignSelf: "center",
      marginVertical: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    titletext: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: "#919597",
    },
    pricetext: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: "#33383B",
    },
    editbtnbody: {
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
  });

import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(20, height),
      justifyContent: "space-around",
      marginRight: 5,
      width: getPercent(30, width),
      marginVertical: 3,
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    professiontext: {
      fontFamily: "Regular",
      fontSize: rf(10),
      color: "#919597",
    },
    titletext: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: "#33383B",
    },
    picturebody: {
      height: getPercent(12, height),
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: 10,
      backgroundColor: "#E7EEF0",
    },
  });

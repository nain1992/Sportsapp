import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(20, height),
      marginRight: 5,
      width: getPercent(90, width),
      flexDirection: "row",
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
    title: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: "#33383B",
    },
    picturebody: {
      height: "100%",
      width: "40%",
      backgroundColor: "#fff",
      borderRadius: 10,
      backgroundColor: "#E7EEF0",
    },
    details: {
      padding: 10,
      flex: 1,
      justifyContent: "space-around",
    },
    locationtext: {
      fontFamily: "Regular",
      fontSize: rf(10),
      color: "#919597",
      marginLeft: 5,
    },
  });

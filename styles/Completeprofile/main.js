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
    labletext: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#706F93",
      marginVertical: 5,
      paddingHorizontal: getPercent(5, width),
      textAlign: "center",
    },
    profilepicwrapper: {
      height: getPercent(22, height),
      width: getPercent(100, width),
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 8,
      marginVertical: 4,
    },
    profilepicbody: {
      height: getPercent(13, height),
      width: getPercent(13, height),
      backgroundColor: "#D9D9D9",
      overflow: "hidden",
      borderRadius: 100,
      borderWidth: 2,
      borderColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    uploadbtnbody: {
      height: getPercent(5, height),
      position: "absolute",
      right: getPercent(35, width),
      top: getPercent(9, height),
      width: getPercent(5, height),
      borderRadius: 100,
      borderWidth: 2,
      borderColor: "#fff",
      backgroundColor: "#4F7FFF",
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    nametext: {
      fontFamily: "SemiBold",
      fontSize: rf(20),
      color: "#27364E",
    },
    usernametext: {
      paddingHorizontal: getPercent(5, width),
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#111432",
      marginVertical: 5,
    },
    namefield: {
      height: getPercent(6, height),
      width: getPercent(90, width),
      borderRadius: 100,
      backgroundColor: "#fff",
      flexDirection: "row",
      alignSelf: "center",
      marginVertical: 5,
      alignItems: "center",
      paddingHorizontal: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    iconbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
    },
    availabletext: {
      paddingHorizontal: getPercent(5, width),
      fontFamily: "Medium",
      fontSize: rf(13),
      color: "#33B130",
      marginVertical: 5,
    },
    biofield: {
      height: getPercent(12, height),
      width: getPercent(90, width),
      borderRadius: 100,
      backgroundColor: "#fff",
      alignSelf: "center",
      marginVertical: 5,
      justifyContent: "center",
      paddingHorizontal: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    btnwrapper: {
      alignItems: "center",
      height: getPercent(12, height),
      justifyContent: "flex-end",
      marginBottom: 10,
    },
  });

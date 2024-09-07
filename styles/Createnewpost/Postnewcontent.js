import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
    },
    postbody: {
      flexDirection: "row",
      alignItems: "flex-start",
      height: getPercent(20, height),
      padding: 10,
      marginBottom: 5,
    },
    picbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
      borderRadius: 100,
      marginRight: 10,
    },
    input: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#000000",
      width: "90%",
      marginTop: 5,
    },
    postbtnwrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    iconswrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    posticonsbody: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      justifyContent: "center",
      alignItems: "center",
    },
    postbtnbody: {
      height: getPercent(5, height),
      width: getPercent(12, height),
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "#F97830",
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
    posttext: {
      fontFamily: "Black",
      fontSize: rf(13),
      color: "#fff",
    },
    background: {
      height: "100%",
      width: "100%",
      position: "absolute",
      overflow: "hidden",
    },
  });

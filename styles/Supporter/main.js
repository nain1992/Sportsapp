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
    profilename: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      alignSelf: "center",
      backgroundColor: "#EFEFEF",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 5,
    },
    name: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#000000",
    },
    paymentwrapper: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      width: getPercent(90, width),
      alignSelf: "center",
      justifyContent: "space-between",
    },
    paymentbox: {
      height: getPercent(15, height),
      width: getPercent(43, width),
      marginVertical: 4,
      borderRadius: 10,
      backgroundColor: "#3F72AF",
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
    amountbox: {
      height: getPercent(15, height),
      width: getPercent(28, width),
      marginVertical: 4,
      borderRadius: 10,
      backgroundColor: "#3F72AF",
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
    paymenttext: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: "#fff",
    },
    ortext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#98A2A3",
      textAlign: "center",
      marginVertical: 5,
    },
    input: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#98A2A3",
      textAlign: "center",
    },
    admministrationbody: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      alignSelf: "center",
      backgroundColor: "#EFEFEF",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#EAEBEC",
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 5,
      paddingHorizontal: 10,
    },
    picture: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      borderRadius: 5,
      backgroundColor: "#EEFEFF",
    },
    administext: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: "#2D3132",
    },
    checkbox: {
      height: 15,
      width: 15,
      overflow: "hidden",
      borderRadius: 100,
      borderColor: "#DFDEDE",
      borderWidth: 1,
    },
    aidtext: {
      fontFamily: "Bold",
      fontSize: rf(15),
      color: "#272B2B",
      textAlign: "center",
      marginVertical: 3,
    },
    content: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#272B2B",
      textAlign: "center",
      marginVertical: 3,
      paddingHorizontal: getPercent(5, width),
    },
    btnwrapper: {
      alignItems: "center",
      marginVertical: 10,
    },
  });

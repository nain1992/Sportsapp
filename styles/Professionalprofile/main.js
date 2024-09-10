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
    coverwrapper: {
      height: getPercent(20, height),
      width: getPercent(90, width),
      alignSelf: "center",
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
    },
    profilewrapper: {
      alignItems: "center",
      marginVertical: 8,
      flexDirection: "row",
      width: getPercent(90, width),
      alignSelf: "center",
    },
    profilepicbody: {
      height: getPercent(10, height),
      width: getPercent(10, height),
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
      marginBottom: 10,
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
      fontFamily: "Regular",
      fontSize: rf(16),
      color: "#3B3B3B",
      marginTop: 20,
    },
    username: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#3B3B3B",
    },

    photoswrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(10, height),
    },
    textphotos: {
      fontFamily: "Bold",
      fontSize: rf(14),
      color: "#1B3434",
    },
    postswrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      paddingHorizontal: getPercent(5, width),
      marginBottom: getPercent(10, height),
    },
    postbody: {
      height: getPercent(20, height),
      width: getPercent(43, width),
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
      marginVertical: 4,
    },
    videobody: {
      height: getPercent(20, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
      marginVertical: 4,
    },
    fanwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
    },
    deswrapper: {
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
    },
    fantext: {
      fontFamily: "Medium",
      fontSize: rf(11),
      color: "#919597",
    },
    fannos: {
      fontFamily: "Medium",
      fontSize: rf(15),
      color: "#33383B",
    },

    editprofilebtn: {
      height: getPercent(4, height),
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
    bundles: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#33383B",
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
    },
    supportdiscountwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
    },
    discountcardbody: {
      height: getPercent(18, height),
      width: getPercent(20, height),
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#fff",
      marginLeft: 10,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    percent: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#1DBA5F",
    },
    price: {
      fontFamily: "Medium",
      fontSize: rf(15),
      color: "#33383B",
    },
    months: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#919597",
    },
  });

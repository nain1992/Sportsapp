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
    wrapper: {
      height: getPercent(28, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      alignSelf: "center",
      marginVertical: 6,
      padding: 10,
    },
    picturebody: {
      height: getPercent(10, height),
      width: getPercent(10, height),
      borderRadius: 10,
      backgroundColor: "#E7EEF0",
      alignSelf: "center",
    },
    nametext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#33383B",
      textAlign: "center",
      marginVertical: 4,
    },
    username: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#919597",
      textAlign: "center",
    },
    totalfanswrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      height: "40%",
    },
    numberwrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconbody: {
      height: 15,
      width: 15,
      overflow: "hidden",
      marginLeft: 10,
    },
    totalfans: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#919597",
    },
    numtext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#33383B",
    },
    engagementtextwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      height: getPercent(10, height),
      width: getPercent(100, width),
    },
    textengagement: {
      fontFamily: "Medium",
      fontSize: rf(16),
      color: "#33383B",
    },
    selectbtn: {
      height: getPercent(4, height),
      width: getPercent(25, width),
      borderRadius: 100,
      borderWidth: 1,
      borderColor: "#CACFD0",
      backgroundColor: "#EDEDED",
      alignItems: "center",
      justifyContent: "center",
    },
    btntext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#33383B",
    },
    analyseswrapper: {
      // height: getPercent(40, height),
      // width: getPercent(90, width),
      // alignSelf: "center",
      // overflow: "hidden",
      // marginVertical: 6,
      // marginHorizontal: 10,
      marginVertical: 20,
    },
    engagementboxwrapper: {
      flexDirection: "row",
      width: getPercent(90, width),
      alignSelf: "center",
      justifyContent: "space-between",
    },
    postclickbody: {
      height: getPercent(9, height),
      width: getPercent(43, width),
      backgroundColor: "#209ED1",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    clicks: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: "#fff",
    },
    clicksnum: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: "#fff",
    },
  });

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

    totaluserwrapper: {
      flexDirection: "row",
      width: getPercent(90, width),
      flexWrap: "wrap",
      alignSelf: "center",
      justifyContent: "space-between",
    },
    postclickbody: {
      height: getPercent(9, height),
      width: getPercent(43, width),
      marginVertical: 5,
      backgroundColor: "#fff",
      borderRadius: 10,
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
    clicks: {
      fontFamily: "Medium",
      fontSize: rf(11),
      color: "#919597",
    },
    clicksnum: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: "#33383B",
    },
    newcreatorrequesttext: {
      fontFamily: "Medium",
      fontSize: rf(15),
      color: "#33383B",
      paddingLeft: getPercent(5, width),
      marginVertical: 6,
    },
    newcreatorrequestwrapper: {
      //   height: getPercent(30, height),
      width: getPercent(90, width),
      paddingVertical: 10,
      alignSelf: "center",
      marginVertical: 5,
      backgroundColor: "#fff",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      paddingHorizontal: 10,
      elevation: 5,
      justifyContent: "space-between",
    },
    requestbody: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 5,
    },
    picturebody: {
      height: getPercent(8, height),
      width: getPercent(8, height),
      borderRadius: 10,
      backgroundColor: "#E7EEF0",
    },
    innernamewrapper: {
      flex: 1,
      paddingLeft: 10,
    },
    name: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: "#33383B",
    },
    username: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#919597",
    },
    reviewbtn: {
      height: getPercent(4, height),
      width: getPercent(25, width),
      borderRadius: 100,
      backgroundColor: "#209ED1",
      justifyContent: "center",
      alignItems: "center",
    },
    btntext: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#fff",
    },
    seeallbtn: {
      height: getPercent(6, height),
      width: getPercent(80, width),
      borderRadius: 100,
      backgroundColor: "#209ED1",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
    },
  });

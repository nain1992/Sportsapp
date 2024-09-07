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
    headerbody: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(12, height),
      justifyContent: "center",
    },
    titlewrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontFamily: "SemiBold",
      fontSize: rf(18),
      color: "#656565",
    },
    upcomingtitle: {
      fontFamily: "Medium",
      fontSize: rf(15),
      color: "#33383B",
      marginBottom: 10,
      paddingLeft: getPercent(5, width),
    },
    upcomingbannerbody: {
      height: getPercent(25, height),
      width: getPercent(90, width),
      alignSelf: "center",
      backgroundColor: "#fff",
      borderRadius: 10,
      shadowColor: "#000",
      padding: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    bannerimage: {
      height: "100%",
      width: "100%",
      borderRadius: 10,
      overflow: "hidden",
      justifyContent: "flex-end",
    },
    background: {
      height: "100%",
      width: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    eventtitle: {
      fontFamily: "SemiBold",
      fontSize: rf(14),
      color: "#fff",
      marginLeft: 10,
      marginBottom: 5,
    },
    locationbody: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 10,
      marginBottom: 5,
    },
    locationtext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#fff",
      marginLeft: 5,
    },
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
    },
    seeallwrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(6, height),
    },
    artisttitle: {
      fontFamily: "Medium",
      fontSize: rf(15),
      color: "#33383B",
    },
    seealltext: {
      fontFamily: "Medium",
      fontSize: rf(11),
      color: "#33383B",
    },
  });

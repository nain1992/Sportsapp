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
    daytext: {
      fontFamily: "Bold",
      fontSize: rf(17),
      color: "#1B3434",
      paddingHorizontal: getPercent(5, width),
    },
    detailswrapper: {
      marginVertical: 10,
      paddingHorizontal: getPercent(5, width),
    },
    innerwrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    posterpicbody: {
      height: getPercent(6, height),
      width: getPercent(6, height),
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "#DBE2EF",
    },
    nametext: {
      fontFamily: "SemiBold",
      fontSize: rf(14),
      color: "#1B3434",
      marginRight: 10,
    },
    activity: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#1B3434",
    },
    postthumbnailwrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    thumbnailbody: {
      height: getPercent(10, height),
      width: getPercent(10, height),
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
      marginHorizontal: 3,
    },
  });

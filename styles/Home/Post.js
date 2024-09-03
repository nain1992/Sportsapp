import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: getPercent(5, width),
      paddingVertical: getPercent(3, height),
      borderBottomWidth: 1,
      borderBottomColor: "#C4C4C4",
    },
    posternamewrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 5,
    },
    profilepicbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
    },
    postername: {
      fontFamily: "Regular",
      fontSize: rf(14),
      color: "#3B3B3B",
    },
    posttime: {
      fontFamily: "Regular",
      fontSize: rf(10),
      color: "#3B3B3B",
    },
    postpictureswrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 5,
      justifyContent: "space-between",
    },
    postpictures: {
      height: getPercent(22, height),
      width: getPercent(22, height),
      overflow: "hidden",
      borderRadius: 10,

      backgroundColor: "#DBE2EF",
    },
    posttext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#3B3B3B",
      marginVertical: 8,
    },
    likebutton: {
      height: getPercent(6, height),
      width: getPercent(43, width),
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#FD4E4E",
    },
    commentbutton: {
      height: getPercent(6, height),
      width: getPercent(43, width),
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    likestext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#fff",
      marginLeft: 10,
    },
    commenttext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#3B3B3B",
      marginLeft: 10,
    },
  });

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
    postcommentbodywrapper: {
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
    },
    commenterwrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    commenterimagebody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
      backgroundColor: "#222",
      borderRadius: 100,
    },
    commenternamebody: {
      flex: 1,
      paddingLeft: 10,
    },
    commentername: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: "#121212",
    },
    location: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#AAAAAA",
    },
    commentgifbody: {
      height: getPercent(20, height),
      width: getPercent(90, width),
      alignSelf: "center",
      borderRadius: 10,
      backgroundColor: "#AAAAAA",
      marginVertical: 5,
    },
    comment: {
      marginVertical: 10,
      fontFamily: "Medium",
      fontSize: rf(13),
      color: "rgba(18, 18, 18, 0.6)",
    },
  });

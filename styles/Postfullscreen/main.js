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
    background: {
      height: "100%",
      width: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    imagebg: {
      height: getPercent(100, height),
      width: getPercent(100, width),
      justifyContent: "flex-end",
      paddingBottom: getPercent(15, height),
    },
    storyposterwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(10, height),
    },
    profilepicbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
      borderRadius: 100,
    },
    nametext: {
      fontFamily: "SemiBold",
      fontSize: rf(14),
      color: "#fff",
    },
    comment: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: "#fff",
      paddingHorizontal: getPercent(5, width),
    },
    likescomentwrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: getPercent(5, width),
      marginVertical: 5,
    },
    innerbody: {
      flexDirection: "row",
      alignItems: "center",
    },
    sharestext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#fff",
      marginLeft: 10,
    },
  });

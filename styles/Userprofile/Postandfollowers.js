import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(10, width),
      justifyContent: "space-between",
      height: getPercent(12, height),
    },
    postbody: {
      alignItems: "center",
      justifyContent: "center",
    },
    numofposts: {
      fontFamily: "SemiBold",
      fontSize: rf(14),
      color: "#3B3B3B",
    },
    poststext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#3B3B3B",
    },
    borderbody: {
      height: 20,
      width: 0,
      borderColor: "#C4C4C4",
      borderWidth: 1,
    },
  });

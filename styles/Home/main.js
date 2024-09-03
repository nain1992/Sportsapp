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
    storieswrapper: {
      flexDirection: "row",
      alignItems: "center",
      width: getPercent(90, width),
      height: getPercent(15, height),
      borderBottomColor: "#C4C4C4",
      borderBottomWidth: 1,
      alignSelf: "center",
    },
    addstorybody: {
      height: getPercent(7, height),
      width: getPercent(7, height),
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
      marginRight: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    storybody: {
      height: getPercent(7, height),
      width: getPercent(7, height),
      marginHorizontal: 5,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "#DBE2EF",
      borderWidth: 1,
      borderColor: "#3F72AF",
      justifyContent: "center",
      alignItems: "center",
    },
  });

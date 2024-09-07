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
    mediatext: {
      paddingHorizontal: getPercent(5, width),
      fontFamily: rf(16),
      color: "#1B3434",
      fontFamily: "Bold",
      marginVertical: 10,
    },
    mycontentwrapper: {
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      paddingHorizontal: getPercent(2, width),
      justifyContent: "space-around",
    },
    contenbody: {
      height: getPercent(18, height),
      width: getPercent(30, width),
      backgroundColor: "#DFE4EA",
      borderRadius: 10,
      marginVertical: 3,
    },
  });

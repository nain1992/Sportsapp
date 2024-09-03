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
    sportslistwrapper: {
      alignItems: "center",
    },
    sportsfield: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      borderWidth: 1,
      borderRadius: 100,
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      borderColor: "#FC6767",
      marginVertical: 8,
    },
    sportsnametext: {
      fontFamily: "Regular",
      fontSize: rf(14),
      color: "#171F24",
      marginLeft: 10,
    },
    btnwrapper: {
      alignItems: "center",
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: 20,
    },
  });

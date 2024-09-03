import React from "react";
import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { Tabmenustyles } from "../styles/Global/main";

const Tabmenu = (props) => {
  let { width, height } = useWindowDimensions();
  let styles = Tabmenustyles({ width, height });

  const navigation = useNavigation();

  let Menuicons = [
    { icon: require("../assets/icons/6.png"), screen: "Home" },
    { icon: require("../assets/icons/7.png"), screen: "Profile" },
    { icon: require("../assets/icons/8.png"), screen: "Settings" },
    { icon: require("../assets/icons/9.png"), screen: "Notifications" },
    { icon: require("../assets/icons/10.png"), screen: "Userprofile" },
  ];

  const handlePress = (screen) => {
    navigation?.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {Menuicons?.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => handlePress(item?.screen)}
            key={index}
            style={styles.iconbody}
          >
            <Image
              source={item.icon}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Tabmenu);

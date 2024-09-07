import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Postfullscreen/main";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { AntDesign } from "@expo/vector-icons";
import Tabmenu from "../../globalComponents/Tabmenu";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";

const Postfullscreen = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let iconsdata = [
    {
      icon: <AntDesign name="sharealt" size={20} color="#fff" />,
      number: "99",
    },
    {
      icon: <AntDesign name="heart" size={20} color="#fff" />,
      number: "99",
    },
    {
      icon: <EvilIcons name="comment" size={20} color="#fff" />,
      number: "99",
    },
  ];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/7.jpg")}
        style={styles.imagebg}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(27, 52, 52, 0)", "#3F72AF"]}
          style={styles.background}
        />
        <View style={styles.storyposterwrapper}>
          <View style={styles.profilepicbody}>
            <Image
              source={require("../../assets/images/6.jpg")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={styles.nametext}>Mike Lucky</Text>
            <Text style={styles.nametext}>Jakarta</Text>
          </View>
          <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
            <Entypo name="dots-three-horizontal" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.comment}>
          Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Quisque int
          erdum.
        </Text>
        <View style={styles.likescomentwrapper}>
          {iconsdata.map((item, index) => {
            return (
              <View key={index} style={styles.innerbody}>
                <TouchableOpacity>{item?.icon}</TouchableOpacity>
                <Text style={styles.sharestext}>{item?.number}</Text>
              </View>
            );
          })}
        </View>
      </ImageBackground>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Postfullscreen);

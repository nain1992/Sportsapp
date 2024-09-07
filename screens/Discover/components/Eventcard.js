import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Discover/Eventcard";
// import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Ionicons, Entypo, FontAwesome6 } from "@expo/vector-icons";

const Eventcard = (props) => {
  let { title, profession } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.picturebody}></View>
      <View style={styles.details}>
        <Text style={styles.title}>Fanmeet with Pelican Steve</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo name="location-pin" size={15} color="#919597" />
          <Text style={styles.locationtext}>New York, USA</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo name="back-in-time" size={15} color="#919597" />

          <Text style={styles.locationtext}>Sep 27, 2022 - 10:00 AM</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome6 name="people-group" size={15} color="#919597" />

          <Text style={styles.locationtext}>34 people participants</Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Eventcard);

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
import { styles as _styles } from "../../styles/Discover/main";
import { LinearGradient } from "expo-linear-gradient";

import { useState } from "react";
import { Ionicons, Entypo, Fontisto } from "@expo/vector-icons";
import Tabmenu from "../../globalComponents/Tabmenu";
import Spotartists from "./components/Spotartists";
import Eventcard from "./components/Eventcard";
import { getPercent } from "../../middleware";

const Discover = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: getPercent(10, height) }}
      >
        <View style={styles.headerbody}>
          <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
            <Ionicons name="chevron-back" size={18} color="#121212" />
          </TouchableOpacity>
          <View style={styles.titlewrapper}>
            <Text style={styles.title}>Discover</Text>
          </View>
        </View>
        <Text style={styles.upcomingtitle}>Upcoming Events</Text>
        <View style={styles.upcomingbannerbody}>
          <ImageBackground style={styles.bannerimage}>
            <LinearGradient
              // Background Linear Gradient
              colors={["rgba(231, 238, 240, 1)", "rgba(145, 149, 151, 1)"]}
              start={{ x: 0.5, y: 0.5 }}
              style={styles.background}
            />
            <Text style={styles.eventtitle}>Fanmeet &Design Talks</Text>
            <View style={styles.locationbody}>
              <Entypo name="location-pin" size={15} color="#fff" />
              <Text style={styles.locationtext}>New York, USA</Text>
            </View>
            <View style={styles.locationbody}>
              <Fontisto name="date" size={15} color="#fff" />
              <Text style={styles.locationtext}>12.01.2024</Text>
            </View>
            <View style={styles.locationbody}>
              <Entypo name="back-in-time" size={15} color="#fff" />
              <Text style={styles.locationtext}>12.30</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.seeallwrapper}>
          <Text style={styles.artisttitle}>Artists on the Spot</Text>
          <Text style={styles.seealltext}>See all</Text>
        </View>

        <View style={styles.wrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Spotartists title={"Hilary Ouse"} profession={"Desginer"} />
            <Spotartists title={"Hilary Ouse"} profession={"Desginer"} />
            <Spotartists title={"Hilary Ouse"} profession={"Desginer"} />
            <Spotartists title={"Hilary Ouse"} profession={"Desginer"} />
          </ScrollView>
        </View>
        <View style={styles.seeallwrapper}>
          <Text style={styles.artisttitle}>Events</Text>
          <Text style={styles.seealltext}>See all</Text>
        </View>
        <View style={styles.wrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Eventcard />
            <Eventcard />
            <Eventcard />
            <Eventcard />
          </ScrollView>
        </View>
      </ScrollView>

      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Discover);

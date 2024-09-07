import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Myprofile/main";
import { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Tabmenu from "../../globalComponents/Tabmenu";
import Supportbtn from "./components/Supportbtn";
import { getPercent } from "../../middleware";
import Subscriptionheader from "../../globalComponents/Subscriptionheader";

const Myprofile = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Subscriptionheader title={"My Profile"} navigation={props?.navigation} />
      <ScrollView
        style={{ marginBottom: getPercent(10, height) }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.coverwrapper}></View>
        <View style={styles.profilewrapper}>
          <View style={styles.profilepicbody}></View>
          <View style={{ paddingLeft: 10 }}>
            <Text style={styles.nametext}>Adnan Rana</Text>
            <Text style={styles.username}>@adnanr</Text>
          </View>
        </View>

        <View style={styles.fanwrapper}>
          <View>
            <Text style={styles.fantext}>Fan</Text>
            <Text style={styles.fannos}>12</Text>
          </View>
          <View>
            <Text style={styles.fantext}>Following</Text>
            <Text style={styles.fannos}>45,471</Text>
          </View>
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate("Editsubscription")}
            style={styles.editprofilebtn}
          >
            <Text style={styles.edittext}>EDIT PROFILE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.deswrapper}>
          <Text style={styles.fantext}>
            Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.
            Lorem Ipsum.
          </Text>
          <Text style={styles.fantext}>London</Text>
          <Text style={styles.fantext}>https://Fletch.skinner</Text>
        </View>
        <Supportbtn />
        <Text style={styles.bundles}>Following Bundles</Text>
        <View style={styles.supportdiscountwrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 1, 11, 1]?.map((item, index) => {
              return (
                <View key={index} style={styles.discountcardbody}>
                  <Text style={styles.percent}>5% off</Text>
                  <Text style={styles.price}>£24.90</Text>
                  <Text style={styles.months}>for 3 months</Text>
                  <TouchableOpacity style={styles.editprofilebtn}>
                    <Text style={styles.edittext}>Subscribe</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
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
export default connect(mapStateToProps, {})(Myprofile);

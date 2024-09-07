import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Creator/main";
import { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Subscriptionheader from "../../globalComponents/Subscriptionheader";
import StandardButton from "../../globalComponents/StandardButton";

const Creator = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let totaldata = [
    {
      title: "Total Users",
      number: "29,432",
    },
    {
      title: "Total Post",
      number: "18,312",
    },
    {
      title: "Total Fans",
      number: "18,312",
    },
    {
      title: "Total Creators",
      number: "18,312",
    },
  ];

  return (
    <View style={styles.container}>
      <Subscriptionheader title={"Creator"} navigation={props?.navigation} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.totaluserwrapper}>
          {totaldata?.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.postclickbody}>
                <Text style={styles.clicks}>{item?.title}</Text>
                <Text style={styles.clicksnum}>{item?.number}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={styles.newcreatorrequesttext}>New Creator Request</Text>
        <View style={styles.newcreatorrequestwrapper}>
          {[1, 2, 1, 1]?.map((item, index) => {
            return (
              <View key={index} style={styles.requestbody}>
                <View style={styles.picturebody}></View>
                <View style={styles.innernamewrapper}>
                  <Text style={styles.name}>Fleece Marigold</Text>
                  <Text style={styles.username}>Germany</Text>
                </View>
                <TouchableOpacity style={styles.reviewbtn}>
                  <Text style={styles.btntext}>Review</Text>
                </TouchableOpacity>
              </View>
            );
          })}
          <TouchableOpacity style={styles.seeallbtn}>
            <Text style={styles.btntext}>See All</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.newcreatorrequesttext}>New Creators</Text>
        <View style={styles.newcreatorrequestwrapper}>
          {[1, 2, 1, 1]?.map((item, index) => {
            return (
              <View key={index} style={styles.requestbody}>
                <View style={styles.picturebody}></View>
                <View style={styles.innernamewrapper}>
                  <Text style={styles.name}>Douglas Lyphe</Text>
                  <Text style={styles.username}>Italy</Text>
                </View>
                <Text style={styles.username}>2 hrs ago</Text>
              </View>
            );
          })}
          <TouchableOpacity style={styles.seeallbtn}>
            <Text style={styles.btntext}>See All</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Creator);

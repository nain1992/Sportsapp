import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Dashboard/main";
import { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Subscriptionheader from "../../globalComponents/Subscriptionheader";

const Dashboard = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let fansdata = [
    {
      title: "TOTAL FANS",
      number: "18,312",
      icon: require("../../assets/icons/22.png"),
    },
    {
      title: "SUSBSCRIBED",
      number: "18,312",
      icon: require("../../assets/icons/23.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Subscriptionheader title={"Dashboard"} navigation={props?.navigation} />
      <View style={styles.wrapper}>
        <View style={styles.picturebody}></View>
        <Text style={styles.nametext}>Carnegie Mondover</Text>
        <Text style={styles.username}>@carnegiemondover</Text>
        <View style={styles.totalfanswrapper}>
          {fansdata?.map((item, index) => {
            return (
              <View>
                <Text style={styles.totalfans}>{item?.title}</Text>
                <View style={styles.numberwrapper}>
                  <Text style={styles.numtext}>{item?.number}</Text>
                  <View style={styles.iconbody}>
                    <Image
                      source={item?.icon}
                      style={{ height: "100%", width: "100%" }}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.engagementtextwrapper}>
        <Text style={styles.textengagement}>Your Engagement</Text>
        <TouchableOpacity style={styles.selectbtn}>
          <Text style={styles.btntext}>Weekly</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.engagementboxwrapper}>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Creator")}
          style={styles.postclickbody}
        >
          <Text style={styles.clicks}>Total Fans clicks</Text>
          <Text style={styles.clicksnum}>4,832</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Creator")}
          style={[
            styles.postclickbody,
            {
              backgroundColor: "#1DBA5F",
            },
          ]}
        >
          <Text style={styles.clicks}>Total Views</Text>
          <Text style={styles.clicksnum}>4,832</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.analyseswrapper}>
        <Image
          source={require("../../assets/images/20.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Dashboard);

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
import { styles as _styles } from "../../styles/Notifications/main";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";

const Notifications = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Homeheader title={"Notifications"} navigation={props?.navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.daytext}>Yesterday</Text>
        {[2, 2]?.map((item, index) => {
          return (
            <View key={index} style={styles.detailswrapper}>
              <View style={styles.innerwrapper}>
                <View style={styles.posterpicbody}></View>
                <View style={{ flex: 1, paddingLeft: 10 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.nametext}>Caroline Tan</Text>
                    <FontAwesome name="check-circle" size={15} color="black" />
                  </View>
                  <Text style={styles.activity}>Liked 3 photos</Text>
                </View>
                <Text style={styles.activity}>12 min ago</Text>
              </View>
              <View style={styles.postthumbnailwrapper}>
                <View style={styles.thumbnailbody}></View>
                <View style={styles.thumbnailbody}></View>
                <View style={styles.thumbnailbody}></View>
              </View>
            </View>
          );
        })}
        <Text style={styles.daytext}>This Week</Text>
        {[2, 2, 2]?.map((item, index) => {
          return (
            <View key={index} style={styles.detailswrapper}>
              <View style={styles.innerwrapper}>
                <View style={styles.posterpicbody}></View>
                <View style={{ flex: 1, paddingLeft: 10 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.nametext}>Caroline Tan</Text>
                    <FontAwesome name="check-circle" size={15} color="black" />
                  </View>
                  <Text style={styles.activity}>Liked 3 photos</Text>
                </View>
                <Text style={styles.activity}>12 min ago</Text>
              </View>
              <Text style={styles.activity}>
                Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                Quisque interdum blandit ipsum.
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Notifications);

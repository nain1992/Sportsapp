import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Chatlist/main";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";

const Chatlist = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Homeheader title={"Chat"} navigation={props?.navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.daytext}>Yesterday</Text>

        {[2, 2, 2]?.map((item, index) => {
          return (
            <Pressable
              onPress={() => props?.navigation?.navigate("Chatpage")}
              key={index}
              style={styles.detailswrapper}
            >
              <View style={styles.innerwrapper}>
                <View style={styles.posterpicbody}></View>
                <View style={{ flex: 1, paddingLeft: 10 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.nametext}>Bobby Clay</Text>
                    <FontAwesome name="check-circle" size={15} color="black" />
                  </View>
                  <Text style={styles.activity}>
                    Lorem ipsum dolor sit amet
                  </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.activity}>Just Now</Text>
                  <View style={styles.msgupdate}>
                    <Text style={styles.numberofmsgstext}>2</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          );
        })}
        <Text style={styles.daytext}>This Week</Text>

        {[2, 2, 2, 2, 22]?.map((item, index) => {
          return (
            <View key={index} style={styles.detailswrapper}>
              <View style={styles.innerwrapper}>
                <View style={styles.posterpicbody}></View>
                <View style={{ flex: 1, paddingLeft: 10 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.nametext}>Bobby Clay</Text>
                    <FontAwesome name="check-circle" size={15} color="black" />
                  </View>
                  <Text style={styles.activity}>
                    Lorem ipsum dolor sit amet
                  </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.activity}>Just Now</Text>
                  <View style={styles.msgupdate}>
                    <Text style={styles.numberofmsgstext}>2</Text>
                  </View>
                </View>
              </View>
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
export default connect(mapStateToProps, {})(Chatlist);

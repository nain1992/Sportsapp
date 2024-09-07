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
import { styles as _styles } from "../../../styles/Chatpage/Outgoing";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Outgoing = (props) => {
  let { msgoutgoing, audio, image } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.senderpic}></View>
      <View style={styles.msgbody}>
        {audio ? (
          <View style={styles.audioiconbody}>
            <Image
              source={image}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
        ) : (
          <View style={styles.textbody}>
            <Text style={styles.textmsg}>{msgoutgoing}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Outgoing);

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
import { styles as _styles } from "../../../styles/Professionalprofile/Supportbtn";
import { RFValue as rf } from "react-native-responsive-fontsize";

import { useState } from "react";

const Supportbtn = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.diamondbody}>
        <Image
          source={require("../../../assets/icons/20.png")}
          style={{ height: "50%", width: "50%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textbody}>
        <Text style={styles.premiumtext}>Premium Subscriptions</Text>
        <Text style={styles.monethly}>
          <Text style={{ fontSize: rf(13), color: "#000000" }}>£2.50</Text>
          /monthly
        </Text>
      </View>

      <TouchableOpacity style={styles.suportbody}>
        <Text style={styles.edittext}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Supportbtn);

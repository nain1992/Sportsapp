import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Editsubscription/Editsubscriptionplan";
import { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Editsubscriptionplan = (props) => {
  let { type, price, time, onEditPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titletext}>{type}</Text>
        <Text style={styles.pricetext}>{price}</Text>
        <Text style={styles.titletext}>{time}</Text>
      </View>
      <TouchableOpacity onPress={onEditPress} style={styles.editbtnbody}>
        <Text style={styles.edittext}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Editsubscriptionplan);

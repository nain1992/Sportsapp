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
import { styles as _styles } from "../../../styles/Editprofile/Field";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const Field = (props) => {
  let { title, info } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Text style={styles.titletext}>{title}</Text>
      <View style={styles.fieldbody}>
        <Text style={styles.infotext}>{info}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Field);

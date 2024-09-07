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
import { styles as _styles } from "../../../styles/Menu/Menuoptions";
import { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
const Menuoptions = (props) => {
  let { image, title, num, notification, onPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconbody}>
        <Image
          source={image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <Text style={styles.titletext}>{title}</Text>
      </View>
      {notification ? (
        <View style={styles.numberbody}>
          <Text style={styles.number}>{num}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Menuoptions);

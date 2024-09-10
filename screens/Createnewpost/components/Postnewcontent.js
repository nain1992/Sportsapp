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
import { styles as _styles } from "../../../styles/Createnewpost/Postnewcontent";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const Postnewcontent = (props) => {
  let { image, onPress, OnVideoPress, onLocationPress, onMicPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.postbody}>
        <View style={styles.picbody}>
          <Image
            source={image}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <TextInput style={styles.input} {...props} />
      </View>
      <View style={styles.postbtnwrapper}>
        <View style={styles.iconswrapper}>
          <TouchableOpacity onPress={onPress} style={styles.posticonsbody}>
            <Image
              source={require("../../../assets/icons/18.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={OnVideoPress} style={styles.posticonsbody}>
            <Image
              source={require("../../../assets/icons/Video.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onLocationPress}
            style={styles.posticonsbody}
          >
            <Image
              source={require("../../../assets/icons/Location.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onMicPress} style={styles.posticonsbody}>
            <Image
              source={require("../../../assets/icons/Voice.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.postbtnbody}>
          <LinearGradient
            // Background Linear Gradient
            colors={["#F97830", "#F92F41"]}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={styles.background}
          />
          <Text style={styles.posttext}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Postnewcontent);

import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { Headerstyles } from "../styles/Global/main";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { getPercent } from "../middleware";

const Header = (props) => {
  let { title, steps } = props;
  let { width, height } = useWindowDimensions();
  let styles = Headerstyles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.fixedcirclebody}></View>
      <TouchableOpacity
        onPress={() => props?.navigation?.goBack()}
        style={[
          styles.titlewrapper,
          {
            paddingLeft: getPercent(5, width),
          },
        ]}
      >
        <Ionicons name="chevron-back" size={rf(20)} color="#AAB2B7" />
      </TouchableOpacity>
      <Text style={styles.titletext}>{title}</Text>
      <Text style={styles.steptext}>{steps}</Text>
      <View style={styles.linearbar}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#FC6767", "#EC008C"]}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={styles.background}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Header);

import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { Homeheaderstyles } from "../styles/Global/main";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { getPercent } from "../middleware";

const Homeheader = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Homeheaderstyles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.fixedcirclebody}>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Chatlist")}
          style={styles.msgiconbody}
        >
          <Image
            source={require("../assets/icons/4.png")}
            style={{ height: "50%", width: "50%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Chatlist")}
          style={[
            styles.msgiconbody,
            {
              backgroundColor: "#3F72AF",
            },
          ]}
        >
          <Image
            source={require("../assets/icons/5.png")}
            style={{ height: "50%", width: "50%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.logobody}>
        <Image
          source={require("../assets/images/2.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.titletext}>{title}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Homeheader);

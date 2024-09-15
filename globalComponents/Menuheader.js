import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { Homeheaderstyles } from "../styles/Global/main";

const Menuheader = (props) => {
  let { title, onPress } = props;
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
          onPress={onPress}
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
export default connect(mapStateToProps, {})(Menuheader);

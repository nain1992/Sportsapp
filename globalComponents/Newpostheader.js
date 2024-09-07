import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { Createnewpostheaderstyles } from "../styles/Global/main";

const Newpostheader = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Createnewpostheaderstyles({ width, height });

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
          onPress={() => props?.navigation?.navigate("Menu")}
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
      <TouchableOpacity
        onPress={() => props?.navigation?.goBack()}
        style={styles.logobody}
      >
        <Image
          source={require("../assets/icons/Icon.png")}
          style={{ height: "50%", width: "50%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.titletext}>{title}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Newpostheader);

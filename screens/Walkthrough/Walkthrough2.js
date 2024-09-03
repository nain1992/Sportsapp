import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Walkthrough2/main";
import StandardButton from "../../globalComponents/StandardButton";

const Walkthrough2 = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.Imagewrapper}>
        <Image
          source={require("../../assets/images/1.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textwrapper}>
        <Text style={styles.labletext}>
          Find friends all over the world{"\n"}
        </Text>
        <Text style={styles.lowertext}>
          Lorem ipsum dolor sit amet, consec elite sed do eiusmod temporary
        </Text>
      </View>
      <View style={styles.btnwrapper}>
        <StandardButton
          onPress={() => props?.navigation?.navigate("Login")}
          customStyles={{ borderRadius: 100 }}
          title={"Get Started"}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Walkthrough2);

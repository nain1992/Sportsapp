import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Walkthrough/main";

const Walkthrough = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.welcometextwrapper}>
        <Text style={styles.welcometext}>
          {"\n"}Stay{"\n"}connected{"\n"}with your{"\n"}friends.
        </Text>
      </View>
      <View style={styles.circlewrapper}>
        <View style={styles.circlebody}></View>
        <View style={styles.circlebody}></View>
        <View style={styles.circlebody}></View>
        <View style={styles.circlebody}></View>
      </View>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Walkthrough2")}
        style={styles.skipbtnbody}
      >
        <Text style={styles.skiptext}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Walkthrough);

import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Search/Searchresults";

const Searchresutls = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.picbody}></View>
        <Text style={styles.name}>Caroline Tan</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Following</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Searchresutls);

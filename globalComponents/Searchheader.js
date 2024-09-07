import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { Searchheaderstyles } from "../styles/Global/main";
import { Ionicons, Feather } from "@expo/vector-icons";
import { getPercent } from "../middleware";

const Searchheader = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Searchheaderstyles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          height: getPercent(6, height),
          //   width: getPercent(6, height),
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => props?.navigation?.goBack()}
      >
        <Ionicons name="chevron-back" size={22} color="#121212" />
      </TouchableOpacity>
      <View style={styles.searchbarbody}>
        <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
          <Feather name="search" size={18} color="#121212" />
        </TouchableOpacity>
        <TextInput style={styles.input} {...props} />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Searchheader);

import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { Subscriptionheaderstyles } from "../styles/Global/main";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
const Header = (props) => {
  let { title, steps } = props;
  let { width, height } = useWindowDimensions();
  let styles = Subscriptionheaderstyles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.simpleheader}>
        <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
          <Ionicons name="arrow-back" size={18} color="#33383B" />
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.headertitle}>{title}</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={18}
            color="#33383B"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Header);

import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../styles/Global/Typemsg";

const Chatpage = (props) => {
  let { onIconPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.typemsgwrapper}>
      <TouchableOpacity onPress={onIconPress} style={styles.addiconsbody}>
        <Image
          source={require("../assets/icons/8.png")}
          style={{ height: "90%", width: "90%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.typemsgbody}>
        <TextInput style={styles.input} {...props} />
        <TouchableOpacity style={styles.sendbtn}>
          <Image
            source={require("../assets/icons/16.png")}
            style={{ height: "80%", width: "80%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Chatpage);

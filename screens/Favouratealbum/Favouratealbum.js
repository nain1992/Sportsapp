import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Favouratealbum/main";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Tabmenu from "../../globalComponents/Tabmenu";

const Favouratealbum = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [isselected, setIsselected] = useState("Albums");

  let options = ["Albums", "Photos", "Videos"];

  const handleselection = (item, index) => {
    setIsselected(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingwrapper}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={18} color="#3F72AF" />
        </TouchableOpacity>
        <Text style={styles.titleheader}>Favourate album</Text>
      </View>

      <ScrollView>
        <View style={styles.contentwrapper}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]?.map(
            (item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => props?.navigation?.navigate("Favouratealbum")}
                  style={styles.albumbody}
                ></TouchableOpacity>
              );
            }
          )}
        </View>
      </ScrollView>

      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Favouratealbum);

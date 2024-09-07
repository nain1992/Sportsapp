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
import { styles as _styles } from "../../styles/Scedule/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Newpostheader from "../../globalComponents/Newpostheader";
import Postnewcontent from "./components/Postnewcontent";
import Tabmenu from "../../globalComponents/Tabmenu";
import { getPercent } from "../../middleware";

const Scedule = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [postcontent, setPostcontent] = useState("");

  return (
    <View style={styles.container}>
      <Newpostheader title={"SCEDULE"} navigation={props?.navigation} />
      <ScrollView
        style={{ marginBottom: getPercent(10, height) }}
        showsVerticalScrollIndicator={false}
      >
        <Postnewcontent
          image={require("../../assets/images/17.png")}
          placeholder="Write Somthing"
          placeholderTextColor={"#888C9D"}
          value={postcontent}
          onChangeText={(val) => setPostcontent(val)}
          multiline
        />
        <Text style={styles.mediatext}>Select Media</Text>
        <View style={styles.mycontentwrapper}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.contenbody}
              ></TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Scedule);

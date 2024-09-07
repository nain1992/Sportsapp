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
import { styles as _styles } from "../../styles/Chatpage/main";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";
import Incoming from "./components/Incoming";
import Outgoing from "./components/Outgoing";
import Typemsg from "../../globalComponents/Typemsg";

const Chatpage = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [msg, setMsg] = useState();
  return (
    <View style={styles.container}>
      <Homeheader title={"Bobby Clay"} navigation={props?.navigation} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Incoming msgincoming={"Thank you for accepting me as a friend"} />
        <Outgoing msgoutgoing={"Yes anet with pleasure and i am also happy"} />
        <Incoming
          msgincoming={"I hope we will be friends forever, friends of life"}
        />
        <Outgoing msgoutgoing={"Sure, Thanks you"} />
        <Outgoing image={require("../../assets/icons/15.png")} audio />
      </ScrollView>

      <Typemsg
        placeholder="Write your message"
        placeholderTextColor={"#AAAAAA"}
        value={msg}
        onChangeText={(val) => setMsg(val)}
        multiline
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Chatpage);

import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Parentsdetail/main";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Standardfield from "../../globalComponents/Standardfield";
import StandardButton from "../../globalComponents/StandardButton";

const Guardian = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [email, setEmail] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [pascode, setPascode] = useState("");
  const [relation, setRelation] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.fixedcirclebody}></View>
      <TouchableOpacity
        onPress={() => props?.navigation?.goBack()}
        style={styles.backiconbody}
      >
        <Ionicons name="chevron-back" size={20} color="#AAB2B7" />
      </TouchableOpacity>
      <Text style={styles.signuptext}>Guardian Information</Text>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.fieldwrapper}>
          <Standardfield
            placeholder="First Name"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={name}
            onChangeText={(val) => setName(val)}
            multiline
          />
          <Standardfield
            placeholder="Last Name"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={lastname}
            onChangeText={(val) => setLastname(val)}
            multiline
          />
          <Standardfield
            placeholder="Date of birth"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={dateofbirth}
            onChangeText={(val) => setDateofbirth(val)}
            multiline
          />
          <Standardfield
            placeholder="Email"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={email}
            onChangeText={(val) => setEmail(val)}
            multiline
          />
          <Standardfield
            placeholder="Telephone"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={Telephone}
            onChangeText={(val) => setTelephone(val)}
            multiline
          />
          <Standardfield
            placeholder="Address"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={address}
            onChangeText={(val) => setAddress(val)}
            multiline
          />
          <Standardfield
            placeholder="Post Code"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={pascode}
            onChangeText={(val) => setPascode(val)}
            multiline
          />
          <Standardfield
            placeholder="Relation to above"
            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
            value={relation}
            onChangeText={(val) => setRelation(val)}
            multiline
          />
        </View>
        <View style={styles.btnwrapper}>
          <StandardButton
            title={"Update"}
            // onPress={() => props?.navigation?.navigate("Completeprofile")}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Guardian);

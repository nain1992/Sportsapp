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
import { styles as _styles } from "../../styles/Supervision/main";
import { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";
import Tabmenu from "../../globalComponents/Tabmenu";
import StandardButton from "../../globalComponents/StandardButton";

const Supervision = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.fixedcirclebody}></View>
      <TouchableOpacity
        onPress={() => props?.navigation?.goBack()}
        style={styles.backiconbody}
      >
        <Ionicons name="chevron-back" size={20} color="#AAB2B7" />
      </TouchableOpacity>
      <Text style={styles.signuptext}>Supervision</Text>
      <View style={styles.parentsdetailswrapper}>
        <TextInput style={styles.input} placeholder="Name" />
      </View>
      <View style={styles.parentsdetailswrapper}>
        <TextInput style={styles.input} placeholder="Relation" />
      </View>

      <View style={styles.detailsbtnwrapper}>
        <StandardButton
          customStyles={{ backgroundColor: "#3F72AF" }}
          title={"Parents Details"}
        />
        <StandardButton
          title={"Add Parent / Guardian"}
          onPress={() => props?.navigation?.navigate("Guardian")}
        />
      </View>
      <View style={styles.detailsbtnwrapper}>
        <StandardButton
          customStyles={{ backgroundColor: "#3F72AF" }}
          title={"Continue"}
        />
      </View>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Supervision);

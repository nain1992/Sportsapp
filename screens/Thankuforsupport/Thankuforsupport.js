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
import { styles as _styles } from "../../styles/Thankuforsupport/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Newpostheader from "../../globalComponents/Newpostheader";
import Tabmenu from "../../globalComponents/Tabmenu";
import { getPercent } from "../../middleware";
import StandardButton from "../../globalComponents/StandardButton";

const Thankuforsupport = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Newpostheader title={"SUPPORTER"} navigation={props?.navigation} />

      <View
        style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.iconbody}>
          <Image
            source={require("../../assets/icons/28.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      <Text style={styles.thankutext}>Thank you{"\n"}for support</Text>

      <View style={styles.btnwrapper}>
        <StandardButton
          onPress={() => props?.navigation?.navigate("Supporter")}
          customStyles={{ backgroundColor: "#3F72AF" }}
          title={"Make Another Payment"}
        />
      </View>
      <View style={styles.share}>
        <View style={styles.shareiconbody}>
          <Image
            source={require("../../assets/icons/30.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text
          // onPress={}
          style={styles.sharetext}
        >
          Share to social media
        </Text>
      </View>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Thankuforsupport);

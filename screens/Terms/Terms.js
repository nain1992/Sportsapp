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
import { styles as _styles } from "../../styles/Terms/main";
import { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";
import Tabmenu from "../../globalComponents/Tabmenu";

const Terms = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Homeheader title={"Terms"} navigation={props?.navigation} />
      <ScrollView>
        <Text style={styles.heading}>Terms & Conditions</Text>
        <Text style={styles.termstext}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.{"\n"}
          {"\n"}It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.{"\n"}
          {"\n"}There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the.
          {"\n"}
        </Text>
        <View style={styles.btnwrapper}>
          <TouchableOpacity style={styles.acceptbtn}>
            <Text style={styles.btntext}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Decline}>
            <Text style={styles.btntext1}>Decline</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Terms);

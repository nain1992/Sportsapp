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
import { styles as _styles } from "../../styles/Supporter/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Newpostheader from "../../globalComponents/Newpostheader";
import Tabmenu from "../../globalComponents/Tabmenu";
import { getPercent } from "../../middleware";
import StandardButton from "../../globalComponents/StandardButton";

const Supporter = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [amount, setAmount] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ marginBottom: getPercent(9, height) }}
        showsVerticalScrollIndicator={false}
      >
        <Newpostheader title={"SUPPORTER"} navigation={props?.navigation} />
        <View style={styles.profilename}>
          <Text style={styles.name}>Profile Name</Text>
        </View>

        <View style={styles.paymentwrapper}>
          <TouchableOpacity style={styles.paymentbox}>
            <Text style={styles.paymenttext}>Single</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentbox}>
            <Text style={styles.paymenttext}>Monthly</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amountbox}>
            <Text style={styles.paymenttext}>£5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amountbox}>
            <Text style={styles.paymenttext}>£15</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amountbox}>
            <Text style={styles.paymenttext}>£10</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ortext}>Or</Text>
        <View style={styles.profilename}>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={(val) => setAmount(val)}
            keyboardType="decimal-pad"
            placeholder="Enter amount Manually"
          />
        </View>
        <View style={styles.admministrationbody}>
          <View style={styles.picture}></View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={styles.administext}>Administration</Text>
          </View>
          <View style={styles.checkbox}></View>
        </View>
        <View style={styles.admministrationbody}>
          <View style={styles.picture}></View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={styles.administext}>
              Yes, I would like Gift Aid claimed on my donation.
            </Text>
          </View>
          <View style={styles.checkbox}></View>
        </View>
        <Text style={styles.aidtext}>What is Gift Aid?</Text>
        <Text style={styles.content}>
          By allowing, my muslim burial to claim Gift Aid, you can increase the
          value of your donation by 25% at no cost to you. Your donation of £5
          will be worth £6.25 without you spending an extra penny.
        </Text>
        <View style={styles.btnwrapper}>
          <StandardButton
            onPress={() => props?.navigation?.navigate("Donationsummary")}
            customStyles={{ backgroundColor: "#3F72AF" }}
            title={"CONTINUE TO PAYMENT"}
          />
        </View>
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Supporter);

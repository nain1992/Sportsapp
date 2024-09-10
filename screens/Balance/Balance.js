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
import { styles as _styles } from "../../styles/Balance/main";
import { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";
import Tabmenu from "../../globalComponents/Tabmenu";
import StandardButton from "../../globalComponents/StandardButton";

const Balance = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [moneyin, setMoneyin] = useState(true);
  const [moneyout, setMoneyout] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.fixedcirclebody}></View>
      <TouchableOpacity
        onPress={() => props?.navigation?.goBack()}
        style={styles.backiconbody}
      >
        <Ionicons name="chevron-back" size={20} color="#AAB2B7" />
      </TouchableOpacity>
      <Text style={styles.signuptext}>Current Month</Text>
      <View style={styles.wrapper}>
        <View style={styles.currentbalance}>
          <View style={styles.iconbody}>
            <Image
              source={require("../../assets/icons/down.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.balancetext}>Current Balance</Text>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amounttext}>£3,500</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.currentbalance}>
          <View
            style={[
              styles.iconbody,
              {
                backgroundColor: "rgba(221, 80, 80, 0.37)",
              },
            ]}
          >
            <Image
              source={require("../../assets/icons/up.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.balancetext}>Withdraw</Text>
        </View>
        <View style={styles.amount}>
          <TextInput
            style={styles.input}
            placeholder="Enter Amount"
            placeholderTextColor={"#fff"}
          />
          <TouchableOpacity style={styles.submitbtn}>
            <Text style={styles.textbtn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnwrapper}>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Bankdetails")}
          style={styles.bankdetailsbtn}
        >
          <Text style={styles.btntext}>My Bank Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Balancehistory")}
          style={styles.Balancehistory}
        >
          <Text style={styles.btntext}>Balance History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.moneyinputwrapper}>
        <TouchableOpacity
          onPress={() => {
            setMoneyin(true);
            setMoneyout(false);
          }}
          style={[
            styles.moneyinbtn,
            {
              backgroundColor: moneyin ? "#fff" : "transparent",
            },
          ]}
        >
          <Text style={styles.moneybtntext}>Money In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMoneyout(true);
            setMoneyin(false);
          }}
          style={[
            styles.moneyinbtn,
            {
              backgroundColor: moneyout ? "#fff" : "transparent",
            },
          ]}
        >
          <Text style={styles.moneybtntext}>Money Out</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 1, 1, 1]?.map((item, index) => {
          return (
            <View key={index} style={styles.transactionswrapper}>
              <View style={styles.imagebody}></View>
              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text style={styles.moneybtntext}>
                  Transfer from Jurni Ulum
                </Text>
                <Text style={styles.trasnferamount}>+ $50,00</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Balance);

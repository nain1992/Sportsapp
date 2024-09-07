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
import { styles as _styles } from "../../styles/Donationsummary/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Newpostheader from "../../globalComponents/Newpostheader";
import Tabmenu from "../../globalComponents/Tabmenu";
import { getPercent } from "../../middleware";
import StandardButton from "../../globalComponents/StandardButton";

const Donationsummary = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let fieldsdata = [
    {
      title: "Card Holder Name",
      placeholder: "Name",
    },
    {
      title: "Card Number",
      placeholder: "1234 567 895 567",
    },
    {
      title: "Expiry Date",
      placeholder: "07/23",
    },
    {
      title: "CVV",
      placeholder: "111",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ marginBottom: getPercent(9, height) }}
        showsVerticalScrollIndicator={false}
      >
        <Newpostheader title={"SUPPORTER"} navigation={props?.navigation} />
        <View style={styles.profilename}>
          <Text style={styles.name}>Donation Summary</Text>
        </View>
        <Text style={styles.singlepayment}>£5 Single Payment</Text>
        <View style={styles.cardbody}>
          <Image
            source={require("../../assets/images/22.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.fieldbody}>
          {fieldsdata?.map((item, index) => {
            return (
              <>
                <Text key={index} style={styles.titletext}>
                  {item?.title}
                </Text>

                <View style={styles.fieldinnerbody}>
                  <TextInput
                    style={styles.name}
                    placeholder={item?.placeholder}
                  />
                </View>
              </>
            );
          })}
        </View>
        <View style={styles.btnwrapper}>
          <StandardButton
            onPress={() => props?.navigation?.navigate("Donationsummary2")}
            customStyles={{ backgroundColor: "#3F72AF" }}
            title={"CONFIRM PAYMENT"}
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
export default connect(mapStateToProps, {})(Donationsummary);

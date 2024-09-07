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
import { styles as _styles } from "../../styles/Donationsummary2/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Newpostheader from "../../globalComponents/Newpostheader";
import Tabmenu from "../../globalComponents/Tabmenu";
import { getPercent } from "../../middleware";
import StandardButton from "../../globalComponents/StandardButton";

const Donationsummary2 = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let fieldsdata = [
    {
      title: "Account Name",
      placeholder: "Benjamin Evalent",
    },
    {
      title: "Account Number ",
      placeholder: "1234 567 895 567",
    },
    {
      title: "Sort Code",
      placeholder: "0123",
    },
    {
      title: "Address Post Code",
      placeholder: "Start typing your post code and choose from the list",
    },
    {
      title: "When would you like to  donate each month? ",
      placeholder: "1st Day of the Month",
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
          <Text style={styles.summarytext}>Donation Summary</Text>
        </View>
        <Text style={styles.singlepayment}>£5 Single Payment</Text>

        <View style={styles.fieldbody}>
          {fieldsdata?.map((item, index) => {
            return (
              <>
                <Text key={index} style={styles.titletext}>
                  {item?.title}
                </Text>

                <View style={styles.fieldinnerbody}>
                  <TextInput
                    style={styles.input}
                    placeholder={item?.placeholder}
                  />
                </View>
              </>
            );
          })}
        </View>
        <View style={styles.btnwrapper}>
          <StandardButton
            onPress={() => props?.navigation?.navigate("Thankuforsupport")}
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
export default connect(mapStateToProps, {})(Donationsummary2);

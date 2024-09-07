import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Socials/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import StandardButton from "../../globalComponents/StandardButton";
import Header from "../../globalComponents/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Bankdetails = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let accounts = [
    {
      title: "Full name",
      accountlink: "@Adnan",
      key: "1",
    },
    {
      title: "Bank Name",
      accountlink: "@Adnan",
      key: "2",
    },
    {
      title: "Sort Code",
      accountlink: "@Adnan",
      key: "3",
    },
    {
      title: "Accoount Number / IBAN",
      accountlink: "@Adnan",
      key: "4",
    },
    {
      title: "Billing Address",
      accountlink: "@Adnan",
      key: "5",
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        title={"Social Accounts Links"}
        steps={"All your social media accounts linked to your profile page "}
        navigation={props?.navigation}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sportslistwrapper}>
          {accounts?.map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.accounttitle}>{item?.title}</Text>
                <View style={styles.sportsfield}>
                  <TextInput
                    placeholder={item?.accountlink}
                    style={styles.input}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.btnwrapper}>
        <StandardButton
          title={"Continue"}
          //   onPress={() => props?.navigation?.navigate("Parentsdetail")}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Bankdetails);

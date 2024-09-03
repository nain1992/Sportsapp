import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Addsocialmedia/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import StandardButton from "../../globalComponents/StandardButton";
import Header from "../../globalComponents/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Addsocialmedia = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let accounts = [
    {
      title: "Facebook",
      accountlink: "@Adnan",
      key: "1",
    },
    {
      title: "Instagram",
      accountlink: "@Adnan",
      key: "2",
    },
    {
      title: "Tiktok",
      accountlink: "@Adnan",
      key: "3",
    },
    {
      title: "X",
      accountlink: "@Adnan",
      key: "4",
    },
    {
      title: "Twitter",
      accountlink: "@Adnan",
      key: "5",
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        title={"Add your Social Accounts"}
        steps={"step 4 of 5"}
        navigation={props?.navigation}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sportslistwrapper}>
          {accounts?.map((item, index) => {
            return (
              <>
                <Text key={index} style={styles.accounttitle}>
                  {item?.title}
                </Text>
                <View style={styles.sportsfield}>
                  <TextInput
                    placeholder={item?.accountlink}
                    style={styles.input}
                  />
                </View>
              </>
            );
          })}
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.btnwrapper}>
        <StandardButton
          title={"Continue"}
          onPress={() => props?.navigation?.navigate("Parentsdetail")}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Addsocialmedia);

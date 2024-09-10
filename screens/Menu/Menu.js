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
import { styles as _styles } from "../../styles/Menu/main";
import { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";
import Tabmenu from "../../globalComponents/Tabmenu";
import StandardButton from "../../globalComponents/StandardButton";
import Postandfollowers from "./components/Postandfollowers";
import Menuoptions from "./components/Menuoptions";
import { getPercent } from "../../middleware";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import Menuheader from "../../globalComponents/Menuheader";

const Menu = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const shareFile = async () => {
    const fileUri = FileSystem.documentDirectory + "example.txt";
    await FileSystem.writeAsStringAsync(fileUri, "Hello, this is a test file!");
    const available = await Sharing.isAvailableAsync();
    if (!available) {
      Alert.alert("Sharing is not available on this device");
      return;
    }

    await Sharing.shareAsync(fileUri);
  };

  return (
    <View style={styles.container}>
      {/* <Homeheader title={"Menu"} navigation={props?.navigation} /> */}
      <Menuheader title={"Menu"} onPress={() => props?.navigation?.goBack()} />
      <ScrollView
        style={{ marginBottom: getPercent(10, height) }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profilewrapper}>
          <View style={styles.profilepicbody}></View>
          <Text style={styles.nametext}>Adnan Rana</Text>
          <Text style={styles.username}>@adnanr</Text>
        </View>
        <Postandfollowers
          OnPostPress={() => props?.navigation?.navigate("")}
          OnFollowersPress={() => props?.navigation?.navigate("Myfollowers")}
          OnFollowingPress={() => props?.navigation?.navigate("Myfollowers")}
          posts={"40"}
          followers={"404"}
          following={"333"}
        />
        <Menuoptions
          onPress={() => props?.navigation?.navigate("Scedule")}
          notification
          num={"1"}
          image={require("../../assets/icons/31.png")}
          title={"Schedule Now"}
        />
        <Menuoptions
          onPress={() => props?.navigation?.navigate("Search")}
          image={require("../../assets/icons/31.png")}
          title={"Friends"}
        />
        <Menuoptions
          onPress={() => props?.navigation?.navigate("Chatlist")}
          image={require("../../assets/icons/31.png")}
          title={"Messages"}
        />
        <Menuoptions
          // onPress={() => props?.navigation?.navigate("Dashboard")}
          onPress={() => props?.navigation?.navigate("Balance")}
          image={require("../../assets/icons/31.png")}
          title={"Balance"}
        />
        <Menuoptions
          onPress={shareFile}
          image={require("../../assets/icons/31.png")}
          title={"Share"}
        />
        <Menuoptions
          onPress={() => props?.navigation?.navigate("Scanme")}
          notification
          num={"12"}
          image={require("../../assets/icons/31.png")}
          title={"QR Code"}
        />
        <Menuoptions
          onPress={() => props?.navigation?.navigate("Affiliates")}
          image={require("../../assets/icons/31.png")}
          title={"Affiliates"}
        />
        <Menuoptions
          onPress={() => props?.navigation?.navigate("Notifications")}
          image={require("../../assets/icons/31.png")}
          title={"Notifications"}
        />
        <Menuoptions
          onPress={() => props?.navigation?.navigate("Socials")}
          image={require("../../assets/icons/31.png")}
          title={"Socials"}
        />
        <Menuoptions
          onPress={() => props?.navigation?.navigate("Supervision")}
          // onPress={() => props?.navigation?.navigate("Professionalprofile")}
          notification
          num={"99"}
          image={require("../../assets/icons/31.png")}
          title={"Supervision"}
        />
        <Menuoptions
          onPress={() => props?.navigation?.navigate("Terms")}
          image={require("../../assets/icons/31.png")}
          title={"Terms and Conditions"}
        />
        <Menuoptions
          onPress={() => props?.navigation?.navigate("Albums")}
          image={require("../../assets/icons/31.png")}
          title={"Albums"}
        />
        <Menuoptions
          onPress={() => props?.navigation?.navigate("Favouratealbum")}
          image={require("../../assets/icons/31.png")}
          title={"Favourates"}
        />
        <Menuoptions
          image={require("../../assets/icons/31.png")}
          title={"Delete Account"}
        />
        <Menuoptions
          image={require("../../assets/icons/31.png")}
          title={"Logout"}
        />
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Menu);

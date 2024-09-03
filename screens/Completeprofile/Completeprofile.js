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
import { styles as _styles } from "../../styles/Completeprofile/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Header from "../../globalComponents/Header";
import StandardButton from "../../globalComponents/StandardButton";
import Completemodel from "./components/Completemodel";
import * as ImagePicker from "expo-image-picker";

const Completeprofile = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [code, setCode] = useState("");
  const [ismodelvisible, setIsmodelvisible] = useState(false);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleCreateProfile = () => {
    setIsmodelvisible(false);
    props?.navigation?.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title={"Complete Profile"}
          steps={"step 5 of 5"}
          navigation={props?.navigation}
        />
        <Text style={styles.labletext}>
          By creating a distinctive username and adding an engaging profile
          picture, you'll leave a lasting impression in the online community.
        </Text>
        <View style={styles.profilepicwrapper}>
          <View style={styles.profilepicbody}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : null}
          </View>

          <Text style={styles.nametext}>Adnan R</Text>
          <TouchableOpacity onPress={pickImage} style={styles.uploadbtnbody}>
            <Image
              source={require("../../assets/icons/1.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.usernametext}>Username</Text>
        <View style={styles.namefield}>
          <View style={styles.iconbody}>
            <Image
              source={require("../../assets/icons/2.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <TextInput
            style={styles.usernametext}
            placeholder="@adnan"
            value={username}
            onChangeText={(val) => setUsername(val)}
          />
        </View>
        <Text style={styles.availabletext}>Username Available</Text>
        <Text style={styles.usernametext}>Bio</Text>
        <View style={styles.biofield}>
          <TextInput
            style={styles.usernametext}
            placeholder="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
            value={bio}
            onChangeText={(val) => setBio(val)}
          />
        </View>

        <Text style={styles.usernametext}>
          Affiliate Code (If provided by an agent)
        </Text>
        <View style={styles.namefield}>
          <View style={styles.iconbody}>
            <Image
              source={require("../../assets/icons/2.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <TextInput
            style={styles.usernametext}
            placeholder="123456"
            value={code}
            onChangeText={(val) => setCode(val)}
          />
        </View>
        <View style={styles.btnwrapper}>
          <StandardButton
            title={"Create Profile"}
            onPress={() => setIsmodelvisible(true)}
          />
        </View>
      </ScrollView>
      {ismodelvisible ? <Completemodel onPress={handleCreateProfile} /> : null}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Completeprofile);

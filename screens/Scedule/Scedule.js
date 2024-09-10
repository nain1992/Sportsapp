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
import { styles as _styles } from "../../styles/Scedule/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Newpostheader from "../../globalComponents/Newpostheader";
import Postnewcontent from "./components/Postnewcontent";
import Tabmenu from "../../globalComponents/Tabmenu";
import { getPercent } from "../../middleware";
import * as ImagePicker from "expo-image-picker";
import { Audio } from "expo-av";

const Scedule = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [postcontent, setPostcontent] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [recording, setRecording] = useState(null);
  const [audioUri, setAudioUri] = useState(null);

  // Function to pick an image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Photos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Function to pick a video
  const Pickvideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  };

  // Function to start recording audio
  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        setRecording(recording);
      } else {
        alert("Permission to access the microphone is required!");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  // Function to stop recording audio
  const stopRecording = async () => {
    console.log("audio");
    setRecording(null);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setAudioUri(uri);
    console.log("Recording saved at", uri);
  };

  return (
    <View style={styles.container}>
      <Newpostheader title={"SCEDULE"} navigation={props?.navigation} />
      <ScrollView
        style={{ marginBottom: getPercent(10, height) }}
        showsVerticalScrollIndicator={false}
      >
        <Postnewcontent
          image={require("../../assets/images/17.png")}
          placeholder="Write Somthing"
          placeholderTextColor={"#888C9D"}
          value={postcontent}
          onChangeText={(val) => setPostcontent(val)}
          multiline
          onPress={pickImage}
          OnVideoPress={Pickvideo}
          onVoicePress={recording ? stopRecording : startRecording}
          onLocationPress={() => props?.navigation?.navigate("Location")}
        />
        {/* <Text style={styles.mediatext}>Select Media</Text>
        <View style={styles.mycontentwrapper}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.contenbody}
              ></TouchableOpacity>
            );
          })}
        </View> */}
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Scedule);

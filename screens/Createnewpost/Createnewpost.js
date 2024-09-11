import { View, useWindowDimensions, ScrollView } from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Createnewpost/main";
import { useState, useRef } from "react";
import Newpostheader from "../../globalComponents/Newpostheader";
import Postnewcontent from "./components/Postnewcontent";
import Tabmenu from "../../globalComponents/Tabmenu";
import { getPercent } from "../../middleware";
import * as ImagePicker from "expo-image-picker";
import { Audio } from "expo-av";

const Createnewpost = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [postcontent, setPostcontent] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [recording, setRecording] = useState(null);
  const [audioUri, setAudioUri] = useState(null);

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
      <Newpostheader title={"CREATE NEW POST"} navigation={props?.navigation} />
      <ScrollView
        style={{ marginBottom: getPercent(10, height) }}
        showsVerticalScrollIndicator={false}
      >
        <Postnewcontent
          image={require("../../assets/images/17.png")}
          placeholder="Write Something here"
          placeholderTextColor={"#888C9D"}
          value={postcontent}
          onChangeText={(val) => setPostcontent(val)}
          multiline
          onPress={pickImage}
          OnVideoPress={Pickvideo}
          onMicPress={recording ? stopRecording : startRecording}
          onLocationPress={() => props?.navigation?.navigate("Location")}
        />
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Createnewpost);

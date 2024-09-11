import {
  Text,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Comments/main";
import { useState } from "react";
import Newpostheader from "../../globalComponents/Newpostheader";
import * as ImagePicker from "expo-image-picker";
import Typemsg from "../../globalComponents/Typemsg";
import { getPercent } from "../../middleware";

const Comments = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);

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

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <Newpostheader title={"COMMENTS"} navigation={props?.navigation} />
        <ScrollView
          style={{ marginBottom: getPercent(10, height) }}
          showsVerticalScrollIndicator={false}
        >
          {[1, 1]?.map((item, index) => {
            return (
              <View key={index} style={styles.postcommentbodywrapper}>
                <View style={styles.commenterwrapper}>
                  <View style={styles.commenterimagebody}>
                    <Image
                      source={require("../../assets/images/17.png")}
                      style={{ height: "100%", width: "100%" }}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.commenternamebody}>
                    <Text style={styles.commentername}>Benjamin Robert</Text>
                    <Text style={styles.location}>Bali, Indonesia</Text>
                  </View>
                  <Text style={styles.location}>2 Hr ago</Text>
                </View>
                <View style={styles.commentgifbody}></View>
              </View>
            );
          })}
          {[1, 1, 1, 1, 1]?.map((item, index) => {
            return (
              <View key={index} style={styles.postcommentbodywrapper}>
                <View style={styles.commenterwrapper}>
                  <View style={styles.commenterimagebody}>
                    <Image
                      source={require("../../assets/images/17.png")}
                      style={{ height: "100%", width: "100%" }}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.commenternamebody}>
                    <Text style={styles.commentername}>Benjamin Robert</Text>
                    <Text style={styles.location}>Bali, Indonesia</Text>
                  </View>
                  <Text style={styles.location}>2 Hr ago</Text>
                </View>
                <Text style={styles.comment}>
                  Very beautiful this woman please introduce me to make me a
                  friend
                </Text>
              </View>
            );
          })}
        </ScrollView>

        <Typemsg
          placeholder="Write your text"
          placeholderTextColor={"#AAAAAA"}
          value={comment}
          onChangeText={(val) => setComment(val)}
          multiline
          onIconPress={pickImage}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Comments);

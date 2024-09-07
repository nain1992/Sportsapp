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
import { styles as _styles } from "../../styles/Comments/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Newpostheader from "../../globalComponents/Newpostheader";
import Typemsg from "../../globalComponents/Typemsg";
import { getPercent } from "../../middleware";

const Comments = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [comment, setComment] = useState("");

  return (
    <View style={styles.container}>
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
                Very beautiful this woman please introd uce me to make me a
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
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Comments);

import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Home/Post";
import { useState } from "react";
import { FontAwesome, Entypo, FontAwesome5 } from "@expo/vector-icons";

const Post = (props) => {
  let {
    postcontent,
    name,
    time,
    likes,
    comments,
    onCommentpress,
    onPress,
    onDeletePress,
    onEditPress,
    onPicPress,
  } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [posteditoption, setPosteditoption] = useState(false);

  return (
    <Pressable onPress={onPress} style={styles.container}>
      {posteditoption ? (
        <View style={styles.editbody}>
          <Text
            onPress={() => setPosteditoption(false)}
            style={styles.postername}
          >
            Edit
          </Text>
          <Text
            onPress={() => setPosteditoption(false)}
            style={styles.postername}
          >
            Delete
          </Text>
        </View>
      ) : null}
      <View style={styles.posternamewrapper}>
        <TouchableOpacity
          onPress={onPicPress}
          style={styles.profilepicbody}
        ></TouchableOpacity>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={styles.postername}>{name}</Text>
          <Text style={styles.posttime}>{time}</Text>
        </View>
        <TouchableOpacity onPress={() => setPosteditoption(true)}>
          <Entypo name="dots-three-vertical" size={20} color="#C4C4C4" />
        </TouchableOpacity>
      </View>
      <View style={styles.postpictureswrapper}>
        <View style={styles.postpictures}></View>
        <View style={styles.postpictures}></View>
      </View>
      <Text style={styles.posttext}>{postcontent}</Text>
      <View style={styles.postpictureswrapper}>
        <TouchableOpacity style={styles.likebutton}>
          <FontAwesome name="heart" size={18} color="#fff" />
          <Text style={styles.likestext}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCommentpress} style={styles.commentbutton}>
          <FontAwesome5 name="comment" size={18} color="#3B3B3B" />
          <Text style={styles.commenttext}>{comments}</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Post);

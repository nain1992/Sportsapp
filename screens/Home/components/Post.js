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
import { styles as _styles } from "../../../styles/Home/Post";
import { useState } from "react";
import { FontAwesome, Entypo, FontAwesome5 } from "@expo/vector-icons";

const Post = (props) => {
  let { postcontent, name, time, likes, comments } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.posternamewrapper}>
        <View style={styles.profilepicbody}></View>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={styles.postername}>{name}</Text>
          <Text style={styles.posttime}>{time}</Text>
        </View>
        <TouchableOpacity>
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
        <TouchableOpacity style={styles.commentbutton}>
          <FontAwesome5 name="comment" size={18} color="#3B3B3B" />
          <Text style={styles.commenttext}>{comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Post);

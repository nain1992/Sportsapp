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
import { styles as _styles } from "../../../styles/Userprofile/Postandfollowers";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const Postandfollowers = (props) => {
  let {
    posts,
    followers,
    following,
    OnPostPress,
    OnFollowersPress,
    OnFollowingPress,
  } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={OnPostPress} style={styles.postbody}>
        <Text style={styles.numofposts}>{posts}</Text>
        <Text style={styles.poststext}>Posts</Text>
      </TouchableOpacity>
      <View style={styles.borderbody}></View>
      <TouchableOpacity onPress={OnFollowingPress} style={styles.postbody}>
        <Text style={styles.numofposts}>{following}</Text>
        <Text style={styles.poststext}>Following</Text>
      </TouchableOpacity>
      <View style={styles.borderbody}></View>
      <TouchableOpacity onPress={OnFollowersPress} style={styles.postbody}>
        <Text style={styles.numofposts}>{followers}</Text>
        <Text style={styles.poststext}>Followers</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Postandfollowers);

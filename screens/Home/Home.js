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
import { styles as _styles } from "../../styles/Home/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Homeheader from "../../globalComponents/Homeheader";
import AntDesign from "@expo/vector-icons/AntDesign";
import Post from "./components/Post";
import Tabmenu from "../../globalComponents/Tabmenu";

const Home = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [posteditoption, setPosteditoption] = useState(false);

  return (
    <View style={styles.container}>
      <Homeheader title={"Home"} navigation={props?.navigation} />
      <View style={styles.storieswrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.addstorybody}>
            <AntDesign name="plus" size={20} color="#3F72AF" />
          </TouchableOpacity>
          {[1, 1, 1, 1, 1]?.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => props?.navigation?.navigate("Storyscreen")}
                key={index}
                style={styles.storybody}
              ></TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {[1, 1, 1, 1]?.map((item, index) => {
            return (
              <Post
                key={index}
                name={"Adnan Rana"}
                time={"2 Hours Ago"}
                postcontent={
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
                }
                likes={"70 Likes"}
                comments={"125 Comments"}
                onCommentpress={() => props?.navigation?.navigate("Comments")}
                onPress={() => props?.navigation?.navigate("Postfullscreen")}
              />
            );
          })}
        </View>
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Home);

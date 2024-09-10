import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Albums/main";
import { useState } from "react";
import Homeheader from "../../globalComponents/Homeheader";
import Tabmenu from "../../globalComponents/Tabmenu";

const Albums = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [isselected, setIsselected] = useState("Albums");

  let options = ["Albums", "Photos", "Videos"];

  const handleselection = (item) => {
    setIsselected(item);
  };

  const renderContent = () => {
    if (isselected === "Albums") {
      return (
        <View style={styles.contentwrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => props?.navigation?.navigate("Favouratealbum")}
                style={styles.albumbody}
              >
                {/* Add album thumbnail or content here */}
              </TouchableOpacity>
              <Text style={styles.texttitle}>Recent</Text>
              <Text style={styles.textquantity}>1200</Text>
            </View>
          ))}
        </View>
      );
    } else if (isselected === "Photos") {
      return (
        <View style={styles.contentwrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => props?.navigation?.navigate("PhotoDetail")}
                style={styles.photobody}
              >
                {/* Add photo thumbnail or content here */}
              </TouchableOpacity>
              <Text style={styles.texttitle}>Photo Title</Text>
            </View>
          ))}
        </View>
      );
    } else if (isselected === "Videos") {
      return (
        <View style={styles.contentwrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => props?.navigation?.navigate("VideoDetail")}
                style={styles.videobody}
              ></TouchableOpacity>
              <Text style={styles.texttitle}>Video Title</Text>
            </View>
          ))}
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Homeheader title={"Albums"} navigation={props?.navigation} />
      <ScrollView>
        <View style={styles.photoswrapper}>
          {options?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleselection(item)}
              >
                <Text
                  style={[
                    styles.textphotos,
                    {
                      color: isselected === item ? "#1B3434" : "#C4C4C4",
                    },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {renderContent()}
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Albums);

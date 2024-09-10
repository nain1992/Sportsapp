import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Professionalprofile/main";
import { useState } from "react";
import Homeheader from "../../globalComponents/Homeheader";
import Tabmenu from "../../globalComponents/Tabmenu";
import Supportbtn from "./components/Supportbtn";

const Professionalprofile = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [isselected, setIsselected] = useState("Photos");
  let options = ["Photos", "Videos", "Tags"];

  const handleselection = (item) => {
    setIsselected(item);
  };

  const renderContent = () => {
    switch (isselected) {
      case "Photos":
        return (
          <View style={styles.postswrapper}>
            {[1, 2, 3, 4, 5]?.map((item, index) => (
              <View key={index} style={styles.postbody}></View>
            ))}
          </View>
        );
      case "Videos":
        return (
          <View style={styles.postswrapper}>
            {[1, 2, 3, 4, 5]?.map((item, index) => (
              <View key={index} style={styles.videobody}></View>
            ))}
          </View>
        );
      case "Tags":
        return (
          <View style={styles.postswrapper}>
            {[1, 2, 3, 4, 5]?.map((item, index) => (
              <View key={index} style={styles.postbody}></View>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Homeheader title={"Profile"} navigation={props?.navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.coverwrapper}></View>
        <View style={styles.profilewrapper}>
          <View style={styles.profilepicbody}></View>
          <View style={{ paddingLeft: 10 }}>
            <Text style={styles.nametext}>Adnan Rana</Text>
            <Text style={styles.username}>@adnanr</Text>
          </View>
        </View>

        <View style={styles.fanwrapper}>
          <View>
            <Text style={styles.fantext}>Fan</Text>
            <Text style={styles.fannos}>12</Text>
          </View>
          <View>
            <Text style={styles.fantext}>Following</Text>
            <Text style={styles.fannos}>45,471</Text>
          </View>
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate("Myprofile")}
            style={styles.editprofilebtn}
          >
            <Text style={styles.edittext}>EDIT PROFILE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.deswrapper}>
          <Text style={styles.fantext}>
            Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.
            Lorem Ipsum.
          </Text>
          <Text style={styles.fantext}>London</Text>
          <Text style={styles.fantext}>https://Fletch.skinner</Text>
        </View>

        <Supportbtn
          onSuportPress={() => props?.navigation?.navigate("Supporter")}
        />

        <Text style={styles.bundles}>Following Bundles</Text>
        <View style={styles.supportdiscountwrapper}>
          {[1, 2]?.map((item, index) => (
            <View key={index} style={styles.discountcardbody}>
              <Text style={styles.percent}>5% off</Text>
              <Text style={styles.price}>£24.90</Text>
              <Text style={styles.months}>for 3 months</Text>
              <TouchableOpacity style={styles.editprofilebtn}>
                <Text style={styles.edittext}>SUPPORT</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.photoswrapper}>
          {options.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleselection(item)}>
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
          ))}
        </View>

        {/* Render content based on the selected tab */}
        {renderContent()}
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Professionalprofile);

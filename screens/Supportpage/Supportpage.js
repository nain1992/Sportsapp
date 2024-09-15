import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Supportpage/main";
import Tabmenu from "../../globalComponents/Tabmenu";
import { getPercent } from "../../middleware";
import Supportbtn from "../Myprofile/components/Supportbtn";
import Menuheader from "../../globalComponents/Menuheader";

const Supportpage = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Menuheader
        title={"Support"}
        navigation={props?.navigation}
        onPress={() => props?.navigation?.navigate("Menu")}
      />

      <ScrollView
        style={{ marginBottom: getPercent(10, height) }}
        showsVerticalScrollIndicator={false}
      >
        <Supportbtn
          btncolor
          title={"Support"}
          onPress={() => props?.navigation?.navigate("Supporter")}
        />
        <Text style={styles.bundles}>Following Bundles</Text>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={styles.supportdiscountwrapper}>
            {[1, 1, 1, 1, 1, 1, 1]?.map((item, index) => {
              return (
                <View key={index} style={styles.discountcardbody}>
                  <Text style={styles.percent}>5% off</Text>
                  <Text style={styles.price}>£24.90</Text>
                  <Text style={styles.months}>for 3 months</Text>
                  <TouchableOpacity style={styles.editprofilebtn}>
                    <Text style={styles.edittext}>Subscribe</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Supportpage);

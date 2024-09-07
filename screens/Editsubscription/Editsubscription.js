import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Editsubscription/main";
import { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Tabmenu from "../../globalComponents/Tabmenu";
import { getPercent } from "../../middleware";
import Subscriptionheader from "../../globalComponents/Subscriptionheader";
import Editsubscriptionplan from "./components/Editsubscriptionplan";
import StandardButton from "../../globalComponents/StandardButton";

const Editsubscription = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Subscriptionheader
        title={"Edit the Subscriptions"}
        navigation={props?.navigation}
      />
      <Text style={styles.premiumtext}>Premium Subscriptions</Text>
      <Editsubscriptionplan
        type={"Premium Subscriptions"}
        price={"$12.50"}
        time={"a month"}
        onEditPress={() => props?.navigation?.navigate("Dashboard")}
      />
      <Text style={styles.premiumtext}>Following Bundles</Text>
      <Editsubscriptionplan
        type={"5% off"}
        price={"$12.50"}
        time={"for 3 month"}
      />
      <Editsubscriptionplan
        type={"10% off"}
        price={"$12.50"}
        time={"a month"}
      />
      <Editsubscriptionplan
        type={"15% off"}
        price={"$12.50"}
        time={"for 6 months"}
      />
      <TouchableOpacity style={styles.addnewofferbody}>
        <Text style={styles.addtext}>Add New Offer</Text>
      </TouchableOpacity>
      <View style={styles.btnwrapper}>
        <StandardButton
          customStyles={{ backgroundColor: "#209ED1" }}
          title={"SEND"}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Editsubscription);

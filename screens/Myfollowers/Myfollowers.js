import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Myfollowers/main";
import { useState } from "react";
import Searchheader from "../../globalComponents/Searchheader";
import Searchresults from "./component/Searchresults";
import Tabmenu from "../../globalComponents/Tabmenu";
import Following from "./component/Following";
import Donar from "./component/Donar";

const Myfollowers = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Followers");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Followers":
        return <Searchresults />;
      case "Following":
        return <Following />;
      case "Donors":
        return <Donar />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Searchheader
        title={"Search"}
        value={search}
        onChangeText={(val) => setSearch(val)}
        placeholder="Search Here"
        placeholderTextColor={"#656565"}
        navigation={props?.navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.filtertext}>Filter</Text>
        <View style={styles.filteroptinswrapper}>
          {["Followers", "Following", "Donors"]?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleTabPress(item)}
                style={[
                  styles.filteroptionbody,
                  {
                    borderBottomColor:
                      activeTab === item ? "#535353" : "transparent",
                  },
                ]}
              >
                <Text style={styles.filter}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {renderActiveComponent()}
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Myfollowers);

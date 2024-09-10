import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Affiliates/main";
import { useState } from "react";
import Searchheader from "../../globalComponents/Searchheader";
import Searchresults from "./component/Searchresults";
import Tabmenu from "../../globalComponents/Tabmenu";

const Affiliates = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Followers");

  const Handlefollowers = (item) => {
    setActiveTab(item);
  };

  const renderContent = () => {
    if (activeTab === "Followers") {
      return (
        <View>
          {[1, 2, 3]?.map((item, index) => (
            <Searchresults removed key={index} />
          ))}
        </View>
      );
    } else if (activeTab === "Affiliates") {
      return (
        <View>
          {[4, 5, 6]?.map((item, index) => (
            <Searchresults key={index} />
          ))}
        </View>
      );
    } else if (activeTab === "Removed") {
      return (
        <View>
          <Text style={styles.removedText}>No results found for Removed.</Text>
        </View>
      );
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
          {["Followers", "Affiliates", "Removed"]?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => Handlefollowers(item)}
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

        {renderContent()}
      </ScrollView>

      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Affiliates);

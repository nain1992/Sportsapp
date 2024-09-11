import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Search/main";
import { useState } from "react";
import Searchheader from "../../globalComponents/Searchheader";
import Searchresults from "./component/Searchresults";
import Tabmenu from "../../globalComponents/Tabmenu";

const Search = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterPress = (filter) => {
    setActiveFilter(filter);
  };
  const renderFilteredView = () => {
    switch (activeFilter) {
      case "All":
        return (
          <View style={styles.contentWrapper}>
            {[1, 2, 3, 4].map((item, index) => (
              <Searchresults key={index} />
            ))}
          </View>
        );
      case "Football":
        return (
          <View style={styles.contentWrapper}>
            {[5, 6, 7, 8, 9].map((item, index) => (
              <Searchresults key={index} />
            ))}
          </View>
        );
      case "Boxing":
        return (
          <View style={styles.contentWrapper}>
            {[8, 9, 10].map((item, index) => (
              <Searchresults key={index} />
            ))}
          </View>
        );
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
          {["All", "Football", "Boxing"].map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleFilterPress(item)}
                style={[
                  styles.filteroptionbody,
                  {
                    backgroundColor:
                      activeFilter === item ? "#3F72AF" : "#808080",
                  },
                ]}
              >
                <Text style={styles.filter}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {renderFilteredView()}
      </ScrollView>

      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Search);

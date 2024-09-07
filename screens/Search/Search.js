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
import { styles as _styles } from "../../styles/Search/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Searchheader from "../../globalComponents/Searchheader";
import Searchresults from "./component/Searchresults";
import Tabmenu from "../../globalComponents/Tabmenu";

const Search = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");
  const HandleFilter = (item) => {
    if (filter !== item) {
      setFilter(item);
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
          {["All", "Football", "Boxing"]?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => HandleFilter(item)}
                style={[
                  styles.filteroptionbody,
                  {
                    backgroundColor: filter === item ? "#3F72AF" : "#808080",
                  },
                ]}
              >
                <Text style={styles.filter}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((item, index) => {
          return <Searchresults key={index} />;
        })}
      </ScrollView>
      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Search);

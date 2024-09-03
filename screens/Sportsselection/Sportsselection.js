import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Sportsselection/main";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import StandardButton from "../../globalComponents/StandardButton";
import Header from "../../globalComponents/Header";

const Sportsselection = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let sportsname = [
    "Football",
    "Boxing",
    "MMA",
    "Cricket",
    "Hockey",
    "BasketBall",
  ];

  const [selectedSports, setSelectedSports] = useState([]);

  const handlesportsselection = (item) => {
    if (selectedSports.includes(item)) {
      setSelectedSports(selectedSports.filter((sport) => sport !== item));
    } else {
      setSelectedSports([...selectedSports, item]);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title={"Select Your Current Sports"}
        steps={"step 3 of 5"}
        navigation={props?.navigation}
      />
      <View style={styles.sportslistwrapper}>
        {sportsname?.map((item, index) => {
          const isSelected = selectedSports.includes(item);
          return (
            <TouchableOpacity
              onPress={() => handlesportsselection(item)}
              key={index}
              style={[
                styles.sportsfield,
                {
                  borderColor: isSelected ? "#FC6767" : "#000000",
                },
              ]}
            >
              <EvilIcons name="location" size={20} color="#FC6767" />
              <Text
                style={[
                  styles.sportsnametext,
                  {
                    color: isSelected ? "#FC6767" : "#000000",
                  },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.btnwrapper}>
        <StandardButton
          title={"Continue"}
          onPress={() => props?.navigation?.navigate("Addsocialmedia")}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Sportsselection);

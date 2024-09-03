import { Text, TextInput, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { standardfieldstyles } from "../styles/Global/main";
const Standardfield = (props) => {
  let { fieldColor } = props;
  let { width, height } = useWindowDimensions();
  let styles = standardfieldstyles({ width, height });

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: fieldColor ? "#DBE2EF" : "#F5F5F5",
        },
      ]}
    >
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Standardfield);

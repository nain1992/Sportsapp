import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Scedule/main";
import { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Newpostheader from "../../globalComponents/Newpostheader";
import Tabmenu from "../../globalComponents/Tabmenu";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const LocationPage = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  // State to hold location data
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Request location permission and get user's current location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  // Default map region, updated once location is fetched
  const region = {
    latitude: location?.latitude || 37.78825, // default coordinates
    longitude: location?.longitude || -122.4324, // default coordinates
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <Newpostheader title={"Location"} navigation={props?.navigation} />

      <View style={{ flex: 1 }}>
        {location ? (
          <MapView
            style={{ width: width, height: height * 0.8 }}
            region={region}
            showsUserLocation={true}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="You are here"
            />
          </MapView>
        ) : (
          <Text style={styles.errorText}>
            {errorMsg ? errorMsg : "Fetching location..."}
          </Text>
        )}
      </View>

      <Tabmenu />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(LocationPage);

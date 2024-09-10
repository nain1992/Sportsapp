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
import { styles as _styles } from "../../../styles/Scedule/Postnewcontent";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker from "@react-native-community/datetimepicker";

const Postnewcontent = (props) => {
  let { image, onPress, OnVideoPress, onLocationPress, onVoicePress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  // State for managing date and time
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

  // Function to handle date change
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setScheduleDate(currentDate.toDateString());
  };

  // Function to handle time change
  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(false);
    setScheduleTime(currentTime.toLocaleTimeString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.postbody}>
        <View style={styles.picbody}>
          <Image
            source={image}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <TextInput style={styles.input} {...props} />

        {/* Date Picker */}
        <View style={styles.parentsdetailswrapper}>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              style={styles.input}
              placeholder="Enter Schedule Date"
              value={scheduleDate}
              editable={false}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}
        </View>

        {/* Time Picker */}
        <View style={styles.parentsdetailswrapper}>
          <TouchableOpacity onPress={() => setShowTimePicker(true)}>
            <TextInput
              style={styles.input}
              placeholder="Enter Schedule Time"
              value={scheduleTime}
              editable={false}
            />
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker
              value={date}
              mode="time"
              display="default"
              onChange={onTimeChange}
            />
          )}
        </View>
      </View>

      <View style={styles.postbtnwrapper}>
        <View style={styles.iconswrapper}>
          <TouchableOpacity onPress={onPress} style={styles.posticonsbody}>
            <Image
              source={require("../../../assets/icons/18.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={OnVideoPress} style={styles.posticonsbody}>
            <Image
              source={require("../../../assets/icons/Video.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onLocationPress}
            style={styles.posticonsbody}
          >
            <Image
              source={require("../../../assets/icons/Location.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onVoicePress} style={styles.posticonsbody}>
            <Image
              source={require("../../../assets/icons/Voice.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.postbtnbody}>
          <LinearGradient
            // Background Linear Gradient
            colors={["#F97830", "#F92F41"]}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={styles.background}
          />
          <Text style={styles.posttext}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Postnewcontent);

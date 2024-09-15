import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Dashboard/main";
import Subscriptionheader from "../../globalComponents/Subscriptionheader";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const Dashboard = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let fansdata = [
    {
      title: "TOTAL FANS",
      number: "18,312",
      icon: require("../../assets/icons/22.png"),
    },
    {
      title: "SUSBSCRIBED",
      number: "18,312",
      icon: require("../../assets/icons/23.png"),
    },
  ];

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [400, 300, 500, 600, 800, 400, 300],
        strokeWidth: 3,
        color: (opacity = 1) => `rgba(0, 122, 255, 0.6)`,
      },
      {
        data: [300, 400, 200, 300, 600, 400, 200],
        strokeWidth: 3,
        color: (opacity = 1) => `rgba(29, 186, 95, 0.6)`,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Subscriptionheader title={"Dashboard"} navigation={props?.navigation} />
      <View style={styles.wrapper}>
        <View style={styles.picturebody}></View>
        <Text style={styles.nametext}>Carnegie Mondover</Text>
        <Text style={styles.username}>@carnegiemondover</Text>
        <View style={styles.totalfanswrapper}>
          {fansdata?.map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.totalfans}>{item?.title}</Text>
                <View style={styles.numberwrapper}>
                  <Text style={styles.numtext}>{item?.number}</Text>
                  <View style={styles.iconbody}>
                    <Image
                      source={item?.icon}
                      style={{ height: "100%", width: "100%" }}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.engagementtextwrapper}>
        <Text style={styles.textengagement}>Your Engagement</Text>
        <TouchableOpacity style={styles.selectbtn}>
          <Text style={styles.btntext}>Weekly</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.engagementboxwrapper}>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Creator")}
          style={styles.postclickbody}
        >
          <Text style={styles.clicks}>Total Fans clicks</Text>
          <Text style={styles.clicksnum}>4,832</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Creator")}
          style={[styles.postclickbody, { backgroundColor: "#1DBA5F" }]}
        >
          <Text style={styles.clicks}>Total Views</Text>
          <Text style={styles.clicksnum}>24,134</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.analyseswrapper}>
        <LineChart
          data={data}
          width={Dimensions.get("window").width - 10}
          height={280}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: { borderRadius: 16 },
            propsForDots: {
              r: "0",
            },
            propsForBackgroundLines: {
              strokeDasharray: "",
              stroke: "#f0f0f0",
            },
            withInnerLines: true,
            withOuterLines: false,
            strokeWidth: 3,
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Dashboard);

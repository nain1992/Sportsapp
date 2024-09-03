import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Walkthrough from "../screens/Walkthrough/Walkthrough";
import Walkthrough2 from "../screens/Walkthrough/Walkthrough2";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import Phoneverification from "../screens/Phoneverification/Phoneverification";
import Sportsselection from "../screens/Sportsselection/Sportsselection";
import Forgotpassword from "../screens/Forgotpassword/Forgotpassword";
import Addsocialmedia from "../screens/Addscocialmedia/Addsocialmedia";
import Parentsdetail from "../screens/Parentsdetail/Parentsdetail";
import Completeprofile from "../screens/Completeprofile/Completeprofile";
import Home from "../screens/Home/Home";
import Storyscreen from "../screens/Storyscreen/Storyscreen";
import Userprofile from "../screens/Userprofile/Userprofile";
import Externalprofile from "../screens/Externalprofile/Externalprofile";
import Editprofile from "../screens/Editprofile/Editprofile";
import Notifications from "../screens/Notifications/Notifications";
import Chatlist from "../screens/Chatlist/Chatlist";
import Chatpage from "../screens/Chatpage/Chatpage";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Walkthrough" component={Walkthrough} />
      <Screen name="Walkthrough2" component={Walkthrough2} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Phoneverification" component={Phoneverification} />
      <Screen name="Sportsselection" component={Sportsselection} />
      <Screen name="Forgotpassword" component={Forgotpassword} />
      <Screen name="Addsocialmedia" component={Addsocialmedia} />
      <Screen name="Parentsdetail" component={Parentsdetail} />
      <Screen name="Completeprofile" component={Completeprofile} />
      <Screen name="Home" component={Home} />
      <Screen name="Storyscreen" component={Storyscreen} />
      <Screen name="Userprofile" component={Userprofile} />
      <Screen name="Externalprofile" component={Externalprofile} />
      <Screen name="Editprofile" component={Editprofile} />
      <Screen name="Notifications" component={Notifications} />
      <Screen name="Chatlist" component={Chatlist} />
      <Screen name="Chatpage" component={Chatpage} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);

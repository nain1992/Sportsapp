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
import Createnewpost from "../screens/Createnewpost/Createnewpost";
import Comments from "../screens/Comments/Comments";
import Search from "../screens/Search/Search";
import Myfollowers from "../screens/Myfollowers/Myfollowers";
import Discover from "../screens/Discover/Discover";
import Professtionalprofile from "../screens/Professionalprofile/Professtionalprofile";
import Myprofile from "../screens/Myprofile/Myprofile";
import Editsubscription from "../screens/Editsubscription/Editsubscription";
import Dashboard from "../screens/Dashboard/Dashboard";
import Creator from "../screens/Creator/Creator";
import Suppoerter from "../screens/Supporter/Suppoerter";
import Donationsummary from "../screens/Dobationsummary/Donationsummary";
import Donationsummary2 from "../screens/Donationsummary2/Donationsummary2";
import Thankuforsupport from "../screens/Thankuforsupport/Thankuforsupport";
import Menu from "../screens/Menu/Menu";
import Postfullscreen from "../screens/Postfullscreen/Postfullscreen";
import Albums from "../screens/Albums/Albums";
import Favouratealbum from "../screens/Favouratealbum/Favouratealbum";
import Terms from "../screens/Terms/Terms";
import Socials from "../screens/Socials/Socials";
import Affiliates from "../screens/Affiliates/Affiliates";
import Scanme from "../screens/Scanme/Scanme";
import Supervision from "../screens/Supervision/Supervision";
import Guardian from "../screens/Guardian/Guardian";
import Scedule from "../screens/Scedule/Scedule";
import Balance from "../screens/Balance/Balance";
import Bankdetails from "../screens/Bankdetails/Bankdetails";
import Location from "../screens/Location/Location";
import Balancehistory from "../screens/Balancehistory/Balancehistory";
import Walkthrough3 from "../screens/Walkthrough/Walkthrough3";
import Forgotpassword2 from "../screens/Forgotpassword/Forgotpassword2";
import Resetpassword from "../screens/Resetpassword/Resetpassword";
import Supportpage from "../screens/Supportpage/Supportpage";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Walkthrough" component={Walkthrough} />
      <Screen name="Walkthrough2" component={Walkthrough2} />
      <Screen name="Walkthrough3" component={Walkthrough3} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Phoneverification" component={Phoneverification} />
      <Screen name="Sportsselection" component={Sportsselection} />
      <Screen name="Forgotpassword" component={Forgotpassword} />
      <Screen name="Forgotpassword2" component={Forgotpassword2} />
      <Screen name="Resetpassword" component={Resetpassword} />
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
      <Screen name="Createnewpost" component={Createnewpost} />
      <Screen name="Comments" component={Comments} />
      <Screen name="Search" component={Search} />
      <Screen name="Myfollowers" component={Myfollowers} />
      <Screen name="Discover" component={Discover} />
      <Screen name="Professionalprofile" component={Professtionalprofile} />
      <Screen name="Myprofile" component={Myprofile} />
      <Screen name="Supportpage" component={Supportpage} />

      <Screen name="Editsubscription" component={Editsubscription} />
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Creator" component={Creator} />
      <Screen name="Supporter" component={Suppoerter} />
      <Screen name="Donationsummary" component={Donationsummary} />
      <Screen name="Donationsummary2" component={Donationsummary2} />
      <Screen name="Thankuforsupport" component={Thankuforsupport} />
      <Screen name="Menu" component={Menu} />
      <Screen name="Postfullscreen" component={Postfullscreen} />
      <Screen name="Albums" component={Albums} />
      <Screen name="Favouratealbum" component={Favouratealbum} />
      <Screen name="Terms" component={Terms} />
      <Screen name="Socials" component={Socials} />
      <Screen name="Affiliates" component={Affiliates} />
      <Screen name="Scanme" component={Scanme} />
      <Screen name="Supervision" component={Supervision} />
      <Screen name="Guardian" component={Guardian} />
      <Screen name="Scedule" component={Scedule} />
      <Screen name="Balance" component={Balance} />
      <Screen name="Bankdetails" component={Bankdetails} />
      <Screen name="Location" component={Location} />
      <Screen name="Balancehistory" component={Balancehistory} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);

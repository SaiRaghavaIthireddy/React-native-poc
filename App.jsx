import React, {useState} from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import MessagesScreen from './screens/MessagesScreen';
import ImageScreen from './screens/ImageScreen';
import {ImageBackground, Switch, Text, TextInput, View} from 'react-native';
import ButtonComponent from './components/ButtonComponent';
import CardComponent from './components/CardComponent';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import IconComponent from './components/IconComponent';
import MyAccountScreen from './screens/MyAccountScreen';
import ListingsScreen from './screens/ListingsScreen';
import AppTextInput from './components/AppTextInput';
import AppPicker from './components/AppPicker';
import LoginScreen from './screens/LoginScreen';
export default function App() {
  // const [firstName, setFirstName] = useState('');
  const[isNew,setIsNew]=useState(false)
 
  return (
    <View>
      {/* <WelcomeScreen /> */}
      {/* <CardComponent /> */}
      {/* <ImageScreen /> */}
      {/* <GestureHandlerRootView style={{flex: 1}}> */}
      {/* <MessagesScreen /> */}
      {/* <MyAccountScreen /> */}
      {/* <IconComponent /> */}

      {/* {<ListingsScreen />} */}
      {/* <ListingDetailsScreen /> */}
  
      {/* <Text>{firstName}</Text> */}
{/* <AppTextInput icon="email" placeholder="Enter userName"/>     */}
{/* <Switch value={isNew} onValueChange={(newValue)=>setIsNew(!isNew)}/> */}
{/* </GestureHandlerRootView>
<AppPicker icon="apps" placeholder={"Category"}/>
<AppTextInput icon="email"placeholder="Email" /> */}
  <LoginScreen />
</View>
  );
}

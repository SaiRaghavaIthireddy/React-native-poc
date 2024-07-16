import React from 'react';
import {ImageBackground, Text, Image, StyleSheet, View} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
// import { WebView } from 'react-native-webview';

export default function WelcomeScreen() {
  const bg_image = require('../assets/background.jpg');
  const logo = require('../assets/logo-red.png');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bg_image}
        resizeMode="cover"
        style={styles.backgroundImage}
        blurRadius={5}>
        <View style={{alignItems: 'center'}}>
          <Image source={logo} style={styles.logo} />
          <Text>Sell what you don't need</Text>
        </View>

        <View style={{width: '70%'}}>
          <ButtonComponent title="Login" color="primary" />
          <ButtonComponent title="register" color="secondary" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
  },

  div: {
    width: '100%',
    height: 100,
  },
});

{
  /* <View style={{width:"100%"}}>
                <View style={[styles.div,{ backgroundColor:"#fc5c65"}]}></View>
                <View style={[styles.div,{ backgroundColor:"#4ECDC4"}]}></View></View> */
}
{
  /*<View style={styles.webview}>
                {/* <WebView source={{ uri: 'https://reactnative.dev/' }} style={{flex:1}} /> */
}
{
  /* </View> */
}

// webview: {
//     flex: 1,
//     width: "100%",
//     marginTop: 20,
// }

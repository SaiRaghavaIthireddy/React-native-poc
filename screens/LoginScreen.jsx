import React from 'react';
import {Image, StyleSheet,View} from 'react-native';
import * as Yup from 'yup';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}  >
          
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              textContentType="emailAddress"
              placeholder="Email"
            />

            <AppFormField
              autoCorrect={false}
              autoCapitalize="none"
              icon="lock"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              name="password"
            />

            <SubmitButton title="login" />
          
       
      </AppForm>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});

export default LoginScreen;

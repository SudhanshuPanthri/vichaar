import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {auth} from '../firebase/config';

const LoginScreen = ({navigation}) => {
  // const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [spinner, setSpinner] = useState(false);

  const credentials = {
    email,
    password,
  };

  const handleLogin = async () => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        navigation.navigate('HomeScreen', user);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.parent}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={{height: 40, width: 80, tintColor: 'black'}}
        />
      </View>
      {/*{spinner && <ActivityIndicator size="large" />}*/}
      <View>
        <Image
          source={require('../assets/martina-people-communicate-in-a-group-chat.png')}
          style={{height: 280, width: 280}}
        />
      </View>
      <View style={styles.inputWrapper}>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor="black"
            style={{
              color: 'black',
              // fontWeight: '500',
              fontSize: 16,
            }}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="black"
            style={{
              color: 'black',
              // fontWeight: '500',
              fontSize: 16,
            }}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            value={password}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          padding: 15,
          marginTop: 20,
          width: '85%',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}
        onPress={() => handleLogin()}>
        <Text style={{color: 'whitesmoke', fontSize: 16, fontWeight: '500'}}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          padding: 15,
          marginTop: 20,
          width: '85%',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}
        onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={{color: 'whitesmoke', fontSize: 16, fontWeight: '500'}}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    zIndex: 100,
    top: 70,
    // padding: 20,
    left: 30,
    width: '100%',
  },
  inputWrapper: {
    width: '85%',
  },
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
  },
});

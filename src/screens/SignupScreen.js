import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  // Alert,
} from 'react-native';
import {firebase, auth} from '../firebase/config';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const credentials = {
    name,
    email,
    password,
    confirmPassword,
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Password doesn't match");
    } else {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          if (userCredentials?.user.uid) {
            firebase
              .firestore()
              .collection('UserData')
              .doc(auth().currentUser.uid)
              .set({
                name,
                email,
                password,
                confirmPassword,
                uid: userCredentials?.user.uid,
              });
          }
        });
    }
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
      <View>
        <Image
          source={require('../assets/martina-man-in-a-browser-window.png')}
          style={{height: 180, width: 180, marginTop: 40}}
        />
      </View>
      <View style={styles.inputWrapper}>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter name"
            placeholderTextColor="black"
            style={{
              color: 'black',
              // fontWeight: '500',
              fontSize: 16,
            }}
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>
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
        <View style={styles.input}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="black"
            style={{
              color: 'black',
              // fontWeight: '500',
              fontSize: 16,
            }}
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry={true}
            value={confirmPassword}
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
        onPress={() => handleSignup()}>
        <Text style={{color: 'whitesmoke', fontSize: 16, fontWeight: '500'}}>
          Sign Up
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
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{color: 'whitesmoke', fontSize: 16, fontWeight: '500'}}>
          Login
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

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

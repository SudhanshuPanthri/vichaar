import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {auth} from '../firebase/config';

const WelcomeScreen = ({navigation}) => {
  const [userLogged, setUserLogged] = useState(null);
  const checkUser = () => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setUserLogged(user);
        navigation.navigate('HomeScreen');
      } else {
        setUserLogged(null);
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      checkUser();
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Image
        source={require('../assets/logo.png')}
        style={{height: 60, width: 120, tintColor: 'black'}}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

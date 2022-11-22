import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Image
        source={require('../assets/welcomeScreenbg.jpg')}
        style={{height: '100%', width: '100%', zIndex: 10}}
        defaultSource='Photo by <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</a> on <a href="https://unsplash.com/s/photos/minimal-pattern?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  '
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Secure.</Text>
        <Text style={styles.text}>Anonymous.</Text>
        <Text style={styles.text}>Private.</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 40,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
              Get Started
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>
              Already have an account ?
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                textDecorationLine: 'underline',
                fontWeight: '500',
              }}
              onPress={() => navigation.navigate('LoginScreen')}>
              Log In
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 100,
          top: 50,
          padding: 20,
          width: '100%',
        }}>
        <Image
          source={require('../assets/logo.png')}
          style={{height: 40, width: 80, tintColor: 'white'}}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    width: '100%',
    zIndex: 100,
    position: 'absolute',
    bottom: 0,
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 46,
    fontWeight: '500',
    marginVertical: 5,
    letterSpacing: 1.1,
  },
  button: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
});

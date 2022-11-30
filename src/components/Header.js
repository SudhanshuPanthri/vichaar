import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {auth} from '../firebase/config';

const Header = ({navigation}) => {
  const userLogout = async () => {
    await auth()
      .signOut()
      .then(() => {
        navigation.navigate('LoginScreen');
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <Image
          source={require('../assets/chizuru.jpg')}
          style={{
            height: 40,
            width: 40,
            borderRadius: 50,
            marginLeft: 10,
          }}
        />
      </TouchableOpacity>
      <View>
        {/*<Text style={{fontWeight: '500', fontSize: 16, color: 'black'}}>*/}
        {/*  Messages*/}
        {/*</Text>*/}
        <Image
          source={require('../assets/logo.png')}
          style={{height: 30, width: 60, tintColor: 'black'}}
        />
      </View>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => userLogout()}>
        <Image
          source={require('../assets/logout.png')}
          style={{height: 25, width: 25, marginRight: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 80,
    // marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

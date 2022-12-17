import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {auth, firebase} from '../firebase/config';

const Header = ({navigation}) => {
  const [userData, setUserData] = useState();

  const getCurrentUser = async () => {
    await auth().onAuthStateChanged(authUser => {
      if (authUser) {
        console.log('User is Logged In');
      }
    });
    const db = await firebase.firestore();
    const userRef = await db.collection('UserData');
    const doc = await userRef.where('uid', '==', auth().currentUser.uid).get();
    if (!doc.empty) {
      doc.forEach(snapshot => {
        setUserData(snapshot.data());
        console.log(userData);
      });
    } else {
      console.log('no document');
    }
  };

  const userLogout = async () => {
    await auth()
      .signOut()
      .then(() => {
        navigation.navigate('LoginScreen');
      });
  };

  useEffect(() => {
    getCurrentUser().then(() => {
      console.log('Mil gaya data');
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        {userData && (
          <Image
            source={
              userData.image
                ? {uri: userData.image}
                : require('../assets/chizuru.jpg')
            }
            style={{
              height: 40,
              width: 40,
              borderRadius: 50,
              marginLeft: 10,
            }}
          />
        )}
      </TouchableOpacity>
      <View>
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
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

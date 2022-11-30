import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.parent}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'default'}
      />
      <View style={styles.imageWrapper}>
        <View style={{height: '100%', width: '100%'}}>
          <Image
            source={require('../assets/welcomeScreenbg.jpg')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={styles.container}>
          <Image
            source={require('../assets/chizuru.jpg')}
            style={styles.image}
          />
          <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
            Sudhanshu Panthri
          </Text>
        </View>
      </View>
      <View style={styles.info}>
        <Text>Hi, I'm using vichaar</Text>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 70,
          borderColor: 'white',
          left: 10,
        }}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/icons8-back-90.png')}
          style={{height: 30, width: 30, tintColor: 'white'}}
        />
      </TouchableOpacity>
      <View
        style={{
          bottom: 0,
          width: '100%',
          flex: 0.15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/logo.png')}
          style={{height: 30, width: 60, tintColor: 'black'}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
            padding: 10,
          }}>
          <Text style={{color: 'black', fontSize: 14}}>Made With </Text>
          <Image source={require('../assets/icons8-favorite-16.png')} />
          <Text style={{color: 'black', fontSize: 14}}> In React Native</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    borderWidth: 1,
    flex: 0.25,
    width: '100%',
    position: 'relative',
  },
  cover: {
    borderWidth: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '25 %',
  },
  image: {
    borderWidth: 4,
    borderRadius: 50,
    height: 100,
    width: 100,
    borderColor: 'whitesmoke',
  },
  info: {
    width: '100%',
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

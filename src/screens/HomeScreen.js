import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import UserMessage from '../components/UserMessage';
import {data} from '../data';
import {auth} from '../firebase/config';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.headerWrapper}>
        <Header navigation={navigation} />
      </View>
      <View style={styles.contentWrapper}>
        <FlatList
          data={data}
          renderItem={item => (
            <UserMessage data={item} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerWrapper: {
    flex: 0.1,
    width: '100%',
    // marginTop: 40,
  },
  contentWrapper: {
    flex: 0.9,
    width: '100%',
  },
});

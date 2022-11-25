import React from 'react';
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

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.headerWrapper}>
        <Header />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerWrapper: {
    width: '100%',
    height: '10%',
    marginVertical: 20,
  },
  contentWrapper: {
    height: '85%',
    width: '100%',
  },
});

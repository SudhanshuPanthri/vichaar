import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.headerWrapper}>
        <Header />
      </View>
      <View style={styles.contentWrapper}>
        <Text>Content</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  headerWrapper: {
    // marginVertical: 40,
    borderWidth: 1,
    height: '15%',
    padding: 10,
  },
  contentWrapper: {
    height: '75%',
  },
  footer: {
    height: '10%',
    borderWidth: 1,
  },
});

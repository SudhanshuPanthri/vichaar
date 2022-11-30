import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.parent}>
      <Text>Profile Screen</Text>
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
});

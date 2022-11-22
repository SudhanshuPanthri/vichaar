import React from 'react';
import {View, Text, Image, Pressable, Alert} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
      }}>
      <Text
        style={{
          fontSize: 28,
          color: 'black',
          fontWeight: '700',
          letterSpacing: 1,
        }}>
        Messages
      </Text>
      <Pressable
        onPress={() =>
          Alert.alert('Logout', 'Are you sure you want to logout ?', [
            {text: 'Yes', onPress: () => alert('Logged out Successfully')},
            {text: 'No', onPress: () => alert('Cancelled')},
          ])
        }>
        <Image source={require('../assets/user.png')} height={40} width={40} />
      </Pressable>
    </View>
  );
};

export default Header;

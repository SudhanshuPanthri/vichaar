import React from 'react';
import {View, Text} from 'react-native';

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
      <Text>logo</Text>
    </View>
  );
};

export default Header;

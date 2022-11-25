import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const myId = 'u1';

const Message = message => {
  console.log(message);
  const isMe = true;
  // message.user.id === myId

  return (
    <View
      style={[
        styles.parent,
        {
          backgroundColor: isMe ? 'grey' : '#3777f0',
          marginLeft: isMe ? 'auto' : 10,
        },
      ]}>
      <Text style={{color: isMe ? 'black' : 'white'}}>{message}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#3777f0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '55%',
  },
});

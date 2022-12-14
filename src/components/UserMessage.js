import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

const UserMessage = ({data, navigation}) => {
  // console.log(data.item.messages);
  return (
    <TouchableOpacity
      style={styles.parent}
      onPress={() => navigation.navigate('MessageScreen', data.item.messages)}>
      <View
        style={{
          width: '15%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={data.item.profile}
          style={{
            borderRadius: 50,
            height: 45,
            width: 45,
          }}
        />
      </View>
      <View style={styles.content}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '600', fontSize: 18, color: 'black'}}>
            {data.item.userName}
          </Text>
          <Text>{data.item.timeStamp}</Text>
        </View>
        <View>
          <Text numberOfLines={1}>{data.item.message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserMessage;

const styles = StyleSheet.create({
  parent: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  content: {
    width: '85%',
    height: '100%',
    padding: 10,
  },
});

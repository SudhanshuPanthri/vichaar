import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Message from '../components/Message';

const MessageScreen = ({route, navigation}) => {
  const chat = route.params;
  console.log(chat);
  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar
        translucent
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/icons8-back-90.png')}
            style={{height: 35, width: 35, marginHorizontal: 10}}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/chizuru.jpg')}
          style={{borderRadius: 50, height: 40, width: 40}}
        />
        <Text
          style={{
            marginLeft: 10,
            fontWeight: '500',
            fontSize: 16,
            color: 'black',
          }}>
          Sudhanshu Panthri
        </Text>
      </View>
      {/*<ScrollView>*/}
      {/*    {chat.map((item)=>(*/}
      {/*        <Message message={item}/>*/}
      {/*    )}*/}
      {/*</ScrollView>*/}
      <FlatList data={chat} renderItem={item => <Message message={item} />} />
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerWrapper: {
    marginTop: 50,
    height: '8%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

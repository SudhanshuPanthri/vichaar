import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import Message from '../components/Message';
import messages from '../messages';

const MessageScreen = ({route, navigation}) => {
  const [icon, setIcon] = useState(false);
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
      <FlatList
        data={messages.messages}
        renderItem={({item}) => <Message message={item} />}
        inverted={true}
        showsVerticalScrollIndicator={false}
      />
      <View
        style={{
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: 10,
        }}>
        <View style={{width: '85%'}}>
          <TextInput
            placeholder={'Enter message'}
            style={{
              backgroundColor: '#FAF9F1',
              borderRadius: 14,
              padding: 10,
              fontSize: 16,
            }}
            placeholderTextColor={'black'}
            onChangeText={text => {
              setIcon(true);
            }}
          />
        </View>
        {icon ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#3777f0',
              borderRadius: 50,
              padding: 2,
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/icons8-send-50.png')}
              style={{height: 25, width: 25, tintColor: 'white'}}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#3777f0',
              borderRadius: 50,
              padding: 2,
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/icons8-plus-50.png')}
              style={{height: 30, width: 30, tintColor: 'white'}}
            />
          </TouchableOpacity>
        )}
      </View>
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

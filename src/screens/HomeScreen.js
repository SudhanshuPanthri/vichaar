import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import Header from '../components/Header';
import UserMessage from '../components/UserMessage';
import {auth, firebase} from '../firebase/config';

const HomeScreen = ({navigation}) => {
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCurrentUser = async () => {
    setLoading(true);
    await auth().onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser);
      }
    });
    const db = await firebase.firestore();
    const usersRef = await db.collection('UserData');
    await usersRef.get().then(snapshot => {
      setAllUsers(snapshot.docs);
      setLoading(false);
    });
  };

  useEffect(() => {
    getCurrentUser();
  }, [user]);

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      {!loading ? (
        <>
          <View style={styles.headerWrapper}>
            <Header navigation={navigation} />
          </View>
          <View style={styles.contentWrapper}>
            <FlatList
              data={allUsers}
              renderItem={item => (
                <UserMessage data={item} navigation={navigation} />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons8-loading-circle.gif')}
            style={{height: 40, width: 40}}
          />
        </View>
      )}
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

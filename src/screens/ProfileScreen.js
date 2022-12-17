import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Modal,
  Alert,
} from 'react-native';
import {auth, firebase, firestore, storage} from '../firebase/config';
import {launchImageLibrary} from 'react-native-image-picker';

const ProfileScreen = ({navigation}) => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const [cameraImage, setCameraImage] = useState();
  const [modal, setModal] = useState(false);

  const getCurrentUser = async () => {
    setLoading(true);
    await auth().onAuthStateChanged(authUser => {
      if (authUser) {
        console.log('User is Logged In');
      }
    });
    const db = await firebase.firestore();
    const userRef = await db.collection('UserData');
    const doc = await userRef.where('uid', '==', auth().currentUser.uid).get();
    if (!doc.empty) {
      doc.forEach(snapshot => {
        setUserData(snapshot.data());
        console.log(userData);
      });
    } else {
      console.log('no document');
    }
  };

  const uploadData = () => {
    launchImageLibrary({quality: 0.5}, fileobj => {
      const img = fileobj.assets[0];
      const uploadTask = storage()
        .ref()
        .child(`${auth().currentUser.uid}/pfp`)
        .putFile(img.uri);
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress === 100) {
            console.log('image uploaded');
          }
        },
        error => {
          console.log('error uploading image');
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            setCameraImage(downloadURL);
            console.log(cameraImage);
            saveProfileImg().then(() => {
              console.log('pfp saved');
            });
          });
        },
      );
    }).then(() => {
      setModal(false);
      console.log('done');
    });
  };

  // __________
  const saveProfileImg = async () => {
    try {
      await firestore()
        .collection('UserData')
        .doc(auth().currentUser.uid)
        .update({
          image: cameraImage,
        })
        .then(() => {
          Alert.alert('Image Uploaded Successfully');
        });
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  const OpenModal = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 400,
              borderWidth: 1,
              width: '100%',
              alignItems: 'center',
              backgroundColor: '#000',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}>
            <Text
              style={{
                color: 'white',
                marginTop: 20,
                fontSize: 14,
                fontWeight: '500',
              }}>
              Select Profile Picture
            </Text>
            <View style={{marginVertical: 40}}>
              <TouchableOpacity
                style={{
                  padding: 15,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 12,
                }}
                onPress={() => {
                  uploadData();
                }}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>
                  Choose Picture
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => setModal(!modal)}
              style={{marginTop: 50}}>
              <Image
                source={require('../assets/icons8-macos-close-32.png')}
                style={{tintColor: 'white', height: 40, width: 40}}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };

  useEffect(() => {
    getCurrentUser().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <View style={styles.parent}>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={'default'}
          />
          <Image
            source={require('../assets/icons8-loading-circle.gif')}
            style={{height: 40, width: 40}}
          />
        </View>
      ) : (
        <View style={styles.parent}>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={'default'}
          />
          <View style={styles.imageWrapper}>
            <View style={{height: '100%', width: '100%'}}>
              <Image
                source={require('../assets/welcomeScreenbg.jpg')}
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <OpenModal />
            <View style={styles.container}>
              {userData && (
                <Image
                  source={
                    userData.image
                      ? {uri: userData.image}
                      : require('../assets/chizuru.jpg')
                  }
                  style={styles.image}
                />
              )}
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: '500',
                  textTransform: 'capitalize',
                }}>
                {userData && userData.name}
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}
                onPress={() => {
                  setModal(true);
                  OpenModal();
                }}>
                <Image source={require('../assets/icons8-edit-16.png')} />
                <Text style={{color: 'black', marginLeft: 10}}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.info}>
            {/*<Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>*/}
            {/*  Bio*/}
            {/*</Text>*/}
            {/*<Text style={{color: 'grey', fontSize: 16}}>*/}
            {/*  Hi, I'm using vichaar*/}
            {/*</Text>*/}
            <View
              style={{
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
                Member Since
              </Text>
              {userData ? (
                <Text>{userData.joined.toLocaleString().substring(0, 25)}</Text>
              ) : (
                <Text>Loading</Text>
              )}
            </View>
          </View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 70,
              borderColor: 'white',
              left: 10,
            }}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/icons8-back-90.png')}
              style={{height: 30, width: 30, tintColor: 'white'}}
            />
          </TouchableOpacity>
          <View
            style={{
              bottom: 0,
              width: '100%',
              flex: 0.15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/logo.png')}
              style={{height: 30, width: 60, tintColor: 'black'}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                padding: 10,
                width: '100%',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  marginRight: 10,
                  fontWeight: '500',
                }}>
                Made With
              </Text>
              <Image source={require('../assets/icons8-favorite-16.png')} />
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  marginLeft: 10,
                  fontWeight: '500',
                }}>
                in India
              </Text>
            </View>
            <Text style={{color: 'black'}}>v 1.0.a.b</Text>
          </View>
        </View>
      )}
    </>
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
  imageWrapper: {
    borderWidth: 1,
    flex: 0.25,
    width: '100%',
    position: 'relative',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30 %',
  },
  image: {
    borderWidth: 4,
    borderRadius: 50,
    height: 100,
    width: 100,
    borderColor: 'whitesmoke',
  },
  info: {
    padding: 10,
    width: '60%',
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

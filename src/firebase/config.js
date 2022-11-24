// import {initializeApp} from 'firebase/app';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyAw_JdzQOBJ6ESWR7iJqGtlmoUq4KbIBLQ',
  authDomain: 'vichaar-dfaf4.firebaseapp.com',
  projectId: 'vichaar-dfaf4',
  storageBucket: 'vichaar-dfaf4.appspot.com',
  messagingSenderId: '744657973255',
  appId: '1:744657973255:web:97b768230d065466bb3aa2',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase, firestore, auth, database};

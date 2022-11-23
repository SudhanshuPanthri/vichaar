import {initializeApp} from 'firebase/app';
import firebase from 'firebase/compat';
const firebaseConfig = {
  apiKey: 'AIzaSyAw_JdzQOBJ6ESWR7iJqGtlmoUq4KbIBLQ',
  authDomain: 'vichaar-dfaf4.firebaseapp.com',
  projectId: 'vichaar-dfaf4',
  storageBucket: 'vichaar-dfaf4.appspot.com',
  messagingSenderId: '744657973255',
  appId: '1:744657973255:web:97b768230d065466bb3aa2',
};

let app;

if (firebase.apps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};

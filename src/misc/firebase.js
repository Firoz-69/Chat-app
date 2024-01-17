import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const Config = {
  apiKey: 'AIzaSyCSk9xdTqqv_hSTtyHc9mMJx7AKFxxwCLo',
  authDomain: 'chat-web-app-ab987.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-ab987-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-ab987',
  storageBucket: 'chat-web-app-ab987.appspot.com',
  messagingSenderId: '761878762787',
  appId: '1:761878762787:web:0073917702d19a731b2896',
};
const app = firebase.initializeApp(Config);
export const auth = app.auth();
export const database = app.database();

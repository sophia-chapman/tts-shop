import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: 'project-id.firebaseapp.com',
  databaseURL: process.env.REACT_APP_DATABASE_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: 'sender-id',
  // appID: 'app-id',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const productDb = db.collection('products');
export const storage = firebase.storage().ref();

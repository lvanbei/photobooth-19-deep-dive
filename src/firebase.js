import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth, signInAnonymously } from 'firebase/auth';

/*
  If you wish to generate a QRcode and save your picture on Firebase
  you first need to create a Firebase project.
  Replace this object with your own Firebase config.
  More info here : https://support.google.com/firebase/answer/7015592?hl=en#web&zippy=%2Cin-this-article 
*/
const firebaseConfig = {
  apiKey: 'APIKEY',
  authDomain: 'AUTHDOMAIN',
  projectId: 'PROJECTID',
  storageBucket: 'BUCKET',
  messagingSenderId: 'MESSAGEID',
  appId: 'APPID',
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
signInAnonymously(auth)
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.error(e);
  });
export default storage;

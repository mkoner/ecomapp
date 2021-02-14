import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyAH1ZdljtVffPkBJMef9FgvAxGAzJPVJUI",
    authDomain: "crwn-db-ac457.firebaseapp.com",
    projectId: "crwn-db-ac457",
    storageBucket: "crwn-db-ac457.appspot.com",
    messagingSenderId: "163648317379",
    appId: "1:163648317379:web:54c38f80024d1b850cbf76"
  };
  
  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;
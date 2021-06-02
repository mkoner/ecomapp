import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAH1ZdljtVffPkBJMef9FgvAxGAzJPVJUI",
  authDomain: "crwn-db-ac457.firebaseapp.com",
  projectId: "crwn-db-ac457",
  storageBucket: "crwn-db-ac457.appspot.com",
  messagingSenderId: "163648317379",
  appId: "1:163648317379:web:54c38f80024d1b850cbf76"
}; 

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments= async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  
  const batch = firestore.batch();
  objectsToAdd.forEach (obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj)
    
  });
  return  await batch.commit();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



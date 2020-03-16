import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyAadlMHiDgyWaZ35Moa6VzCzGMyQ7aQkNY",
  authDomain: "crwn-db-e0df4.firebaseapp.com",
  databaseURL: "https://crwn-db-e0df4.firebaseio.com",
  projectId: "crwn-db-e0df4",
  storageBucket: "crwn-db-e0df4.appspot.com",
  messagingSenderId: "497765718453",
  appId: "1:497765718453:web:2dce8a07785112e77921fc",
  measurementId: "G-FZMNHZKYDF"
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
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


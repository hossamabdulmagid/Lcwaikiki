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
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(Provider);



export default firebase;

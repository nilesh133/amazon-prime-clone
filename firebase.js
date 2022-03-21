import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBRDeCkOwF3HXE5ucIUcu8YLlAakJYmOS8",
    authDomain: "prime-clone-1b5f4.firebaseapp.com",
    projectId: "prime-clone-1b5f4",
    storageBucket: "prime-clone-1b5f4.appspot.com",
    messagingSenderId: "285495330080",
    appId: "1:285495330080:web:a12ed0b9050f5d5bdec345"
};

// const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export { db };
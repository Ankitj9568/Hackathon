//Initialize Firebase in your Frontend:
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Replace with your Firebase configuration object
};

firebase.initializeApp(firebaseConfig);
// email and password 
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User signed up successfully
  })
  .catch((error) => {
    // Handle errors
  });

// Sign in
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User signed in successfully
  })
  .catch((error) => {
    // Handle errors
  });
  // social login(google)
  const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
  .then((result) => {
    // User signed in successfully   
})
.catch((error) => {
  // Handle errors
});
//Handle User Authentication State:
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      // Access user data using user.uid, user.email, etc.
    } else {
      // User is signed out
    }
  });
  


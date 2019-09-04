import * as firebase from "firebase/app";
import "firebase/auth";

// Basic firebase configuration linking web application to database - see firebase documentation

const firebaseConfig = {
  apiKey: "AIzaSyDrETpcAtzH0SF-QkbbM0ErWj9pbPLnusk",
  authDomain: "faceapp-9e877.firebaseapp.com",
  databaseURL: "https://faceapp-9e877.firebaseio.com",
  projectId: "faceapp-9e877",
  storageBucket: "",
  messagingSenderId: "526810962930",
  appId: "1:526810962930:web:16d25700e86f216d"
};

// Initialising firebase
firebase.initializeApp(firebaseConfig);

// Exporting connection to provider for google signin
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com"
});
// Exporting connection to database as a variable

export default firebase;

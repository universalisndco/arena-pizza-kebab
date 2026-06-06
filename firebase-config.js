// Firebase Config — Arena Pizza Kebab
// REMPLACE toutes les valeurs ci-dessous par ta vraie config Firebase

var firebaseConfig = {
  apiKey: "AIzaSyCaxE-POSptcvcXAGSYq7PFKPMcMnRFouM",
  authDomain: "arena-pizza-kebab-8e281.firebaseapp.com",
  projectId: "arena-pizza-kebab-8e281",
  storageBucket: "arena-pizza-kebab-8e281.firebasestorage.app",
  messagingSenderId: "882481455580",
  appId: "1:882481455580:web:2f17aa7e76bae740de2f19"
};

// Initialisation Firebase (CDN compat — pas de module nécessaire)
firebase.initializeApp(firebaseConfig);
var db   = firebase.firestore();
var auth = firebase.auth();

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBeNAl2LS_HRosSs6XQZ66NzhU_E5sPra0",
  authDomain: "pfetest-66417.firebaseapp.com",
  databaseURL: "https://pfetest-66417-default-rtdb.firebaseio.com",
  projectId: "pfetest-66417",
  storageBucket: "pfetest-66417.appspot.com",
  messagingSenderId: "119837416393",
  appId: "1:119837416393:web:d674641f6ecac75c25a618",
  measurementId: "G-TLVG6DHL4X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export  default  firebase
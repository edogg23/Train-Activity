// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCSBlD40ZajjrgmcI0d5ptCjEZ-qfgI22Q",
    authDomain: "train-scheduler-fbfab.firebaseapp.com",
    databaseURL: "https://train-scheduler-fbfab.firebaseio.com",
    projectId: "train-scheduler-fbfab",
    storageBucket: "train-scheduler-fbfab.appspot.com",
    messagingSenderId: "2433039369"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  console.log("db Object: ", database);
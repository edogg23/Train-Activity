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

  database.ref().on("value", function(snapshot) {
     	console.log("dbsnapshot: ", snapshot.val());
     	// $("#click-value").html(snapshot.val().clickCount);
     	// $("tbody").append("<tr><td>" + trainName + "</td>" + "<td>" + destination + "</td>" + "<td>" + firstTrain + "</td>" + "<td>" + frequency + "</td></tr>");
     	// $("tbody").html(snapshot.val().dbdestination);
     	var displayDestination = snapshot.val().dbdestination;
     	console.log("dbdestination: " + displayDestination);
     }, function(errorObject) {
     	console.log("The read failed: " + errorObject.code);
     });

  $("button").on("click", function() {
  	event.preventDefault();
  	trainName = $("#train-name").val().trim();
  	destination = $("#destination").val().trim();
  	firstTrain = $("#first-train-time").val().trim();
  	frequency = $("#frequency").val().trim();

    console.log("train name: ", trainName);
    console.log("destination: ", destination);
    console.log("f train time: ", firstTrain);
    console.log("frequency: ", frequency);

     database.ref().push({
  	"dbtrainname": trainName,
  	"dbdestination": destination,
  	"dbfirsttrain": firstTrain,
  	"dbfrequency": frequency
 	 });

     $("tbody").append("<tr><td>" + trainName + "</td>" + "<td>" + destination + "</td>" + "<td>" + firstTrain + "</td>" + "<td>" + frequency + "</td></tr>");

     $("input").val("");


  })
  

 
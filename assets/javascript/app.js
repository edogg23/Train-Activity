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
  	snapshot.forEach(function(childsnapshot){

	// use web API instead of rest API
  		console.log("childsnapshot: " + childsnapshot.val()["dbdestination"]);
  		var sTrainName = childsnapshot.val()["dbtrainname"];
  		var sDestination = childsnapshot.val()["dbdestination"];
  		var sFrequency = childsnapshot.val()["dbfrequency"];
  		var nextArrival = 10;
  		var miutesAway = 10;
  		console.log("sDestination: " + sDestination);
  		$("tbody").append("<tr><td>" + sTrainName + "</td>" + "<td>" + sDestination + "</td>" + "<td>" + sFrequency + "</td>" + "<td>" + nextArrival + "</td>" + "<td>" + miutesAway + "</td></tr>");


  	})
     	console.log("dbsnapshot: ", snapshot.val());
     	var displayDestination = snapshot.val().dbdestination;
     	
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
  

 
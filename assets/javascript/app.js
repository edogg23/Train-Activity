var sTrainName = '';
var sDestination = '';
var sFrequency = '';
var firstTrain = '';
var firstTrainTime = '';
var currentTime = '';
var nextArrival = '';
var miutesAway = '';
var diffTime = '';
var tRemainder = '';
var minutesTillTrain = ''; 
var nextTrain = '';
var nextTrainFormatted = '';

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

    database.ref().on("value", function(snapshot) {
      $("tbody").empty();
      snapshot.forEach(function(childsnapshot){

    // use web API instead of rest API
        // console.log("childsnapshot: " + childsnapshot.val()["dbdestination"]);
        sTrainName = childsnapshot.val()["dbtrainname"];
        sDestination = childsnapshot.val()["dbdestination"].trim();
        sFrequency = childsnapshot.val()["dbfrequency"];
        snextTrain = childsnapshot.val()["dbnextTrainFormatted"];
        sminutesTillTrain = childsnapshot.val()["dbminutesTillTrain"]
        // console.log("sDestination: " + sDestination);

        $("tbody").append("<tr><td>" + sTrainName + "</td>" + "<td>" + sDestination + "</td>" + "<td>" + sFrequency + "</td>" + "<td>" + snextTrain + "</td>" + "<td>" + sminutesTillTrain + "</td></tr>");
        console.log("write b4 click");

      })
        // console.log("dbsnapshot: ", snapshot.val());
        var displayDestination = snapshot.val().dbdestination;
        
       }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
       });

$(document).ready(function() { // JQyery wrapper

    $("button").on("click", function() {
      event.preventDefault();
      trainName = $("#train-name").val().trim();
      destination = $("#destination").val().trim();
      firstTrain = $("#first-train-time").val().trim();
      firstTrainTime = moment(firstTrain, "hh:mm").subtract(1, "years");
      currentTime = moment();
      frequency = $("#frequency").val().trim();
      diffTime = moment().diff(moment(firstTrainTime), "minutes");
      tRemainder = diffTime % frequency;
      minutesTillTrain = frequency - tRemainder;
      nextTrain = moment().add(minutesTillTrain, "minutes");
      nextTrainFormatted = moment(nextTrain).format("hh:mm");

      // console.log("train name: ", trainName);
      // console.log("destination: ", destination);
      // console.log("f train time: ", firstTrain);
      // console.log("frequency: ", frequency);

       database.ref().push({
      "dbtrainname": trainName,
      "dbdestination": destination,
      "dbfirsttrain": firstTrain,
      "dbfrequency": frequency,
      "dbnextTrainFormatted": nextTrainFormatted,
      "dbminutesTillTrain": minutesTillTrain
     });

       // $("tbody").append("<tr><td>" + sTrainName + "</td>" + "<td>" + sDestination + "</td>" + "<td>" + sFrequency + "</td>" + "<td>" + snextTrain + "</td>" + "<td>" + sminutesTillTrain + "</td></tr>");

       $("input").val("");
       console.log("write times afer click");
       return false;
       // console.log("firstTrain time: " + firstTrain);

    }); //Ends my submit button function


  


  
    // console.log("db Object: ", database);

    



    

   

}); // closes my jQuery wrapper





    


    
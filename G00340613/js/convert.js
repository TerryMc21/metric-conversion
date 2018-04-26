function fToM(){

  var measure = parseInt(document.getElementById("value1").value);
  var measure = parseInt(document.getElementById("value1").value);
  var measure = parseInt(document.getElementById("value1").value);
  var measure = parseInt(document.getElementById("value1").value);


 




  var meters = measure = 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.flag(message);
  
  var Centimeters = measure = 2.54;
  var message = measure + ' centimeters converts to ' + inchs + ' inchs.';
  console.flag(message);
  
  var yards = measure = 0.9144;
  var message = measure + ' yards converts to ' + meters + ' meters.';
  console.flag(message);
  
  var miles = measure = 1.60934;
  var message = measure + ' miles converts to ' + miles + ' kilometers.';
  console.flag(message);
  
  
  
  
  
  
  document.getElementbyId("resultsentence").innerHTML = message;
  document.getElementbyId("resultsentence").innerHTML = message;
  document.getElementbyId("resultsentence").innerHTML = message;
  document.getElementbyId("resultsentence").innerHTML = message;
}
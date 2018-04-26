//getting started metric conversion
function fToM(){

  
 
if meters = 0.3048;


  var measure = parseInt(document.getElementById("meters").value);
//should convert meters to feet
  
  var meters = measure = 0.3048;
  var message = measure + ' feet converts to ' + meters + ' feet.';
  console.flag(message);
  
  
  
  var measure = parseInt(document.getElementById("inchs").value);
//should convert centimeters to inchs
  
  
  var Centimeters = measure = 2.54;
  var message = measure + ' centimeters converts to ' + inchs + ' inchs.';
  console.flag(message);
  
  
  
  var measure = parseInt(document.getElementById("meters").value);
 //should convert yards to meters
 
  var yards = measure = 0.9144;
  var message = measure + ' yards converts to ' + meters + ' meters.';
  console.flag(message);
  
  
  
  var measure = parseInt(document.getElementById("kilometers").value);
  //should convert miles to kilometers
  
  
  var miles = measure = 1.60934;
  var message = measure + ' miles converts to ' + kilometers + ' kilometers.';
  console.flag(message);
  
  
  
  
  
  
  document.getElementbyId("resultsentence").innerHTML = message;
  document.getElementbyId("resultsentence").innerHTML = message;
  document.getElementbyId("resultsentence").innerHTML = message;
  document.getElementbyId("resultsentence").innerHTML = message;
  
}
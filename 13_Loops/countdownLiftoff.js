/*
Write a while loop that counts down from 60 seconds and:

  ++ If there's a task being completed, it prints out the task
  ++ If there is no task being completed, it prints out the time as T-x seconds
*/

var t50 = "Orbiter transfers from ground to internal power";
var t31 = "Ground launch sequencer is go for auto sequence start";
var t16 = "Activate launch pad sound suppression system";
var t10 = "Activate main engine hydrogen burnoff system";
var t06 = "Main engine start";
var t00 = "Solid rocket booster ignition and liftoff!";

var sec = 60;

while (sec >= 0){
  (sec === 50) ? console.log(t50)
  : (sec === 31) ? console.log(t31)
  : (sec === 16) ? console.log(t16)
  : (sec === 10) ? console.log(t10)
  : (sec === 6) ? console.log(t06)
  : (sec === 0) ? console.log(t00)
  : console.log("T-" +sec+ " seconds");
  
  sec--;
}

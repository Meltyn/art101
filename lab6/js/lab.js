// index.js - Arrays and Objects practice
// Author: Sarai
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

//Define Variables
myTransport = ["walking", "bus", "car", "train"];


MyMainRide = {
    make : "Ford",
    model : "Escorts",
    color : "Rusty",
    year : 1980,
    age : function() {
      return 2024 - this.year;
  }
};

document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify (MyMainRide, null, '\t',  "</pre>") );
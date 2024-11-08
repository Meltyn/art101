//lab.js - This simple lavascript/jQuery script uses buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work
//Author: Sarai Lopez
//Date: 2024

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add button to challenge section
$("#problems").append("<button id='button-problems'>Me when I</button>");
// add a click listener to the challenge button
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

$("#results").append("<button id='button-results'>Hunger</button>");
// add a click listener to the challenge button
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});



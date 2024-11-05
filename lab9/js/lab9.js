//lab.js - This simple lavascript/jQuery script uses buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work
//Author: Wes modes
//Date: 2024

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add button to challenge section
$("#problems").append("<button id='button-challenge'>Me when I</button>");
// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

$("#results").append("<button id='button-challenge'>Hunger</button>");
// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});



// index.js - Functions
// Author: Sarai
// Date: 10/28/2024

// Constants

// Functions

function sortUserName() {
    var userName = window.prompt("Hi, What is your name plis?");
    console.log("userName =", userName) ;
    var nameArray = userName.split('') ;
    console.log("nameArray =", nameArray) ;
    var nameArraySort = nameArray.sort() ;
    console.log("nameArraySort =", nameArraySort) ;
    var nameSorted = nameArraySort.join('') ;
    console.log("nameSorted =", nameSorted) ;
    return nameSorted;
}

document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");
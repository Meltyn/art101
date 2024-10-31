// index.js - Anon Functions
// Author: Sarai
// Date: 10/30/2024




function eatNumbers (x) {
    return (x * 5 );
}

//test func.
console.log("Huh, I wonder what 3 quintupled?", eatNumbers(3))
console.log("Huh, I wonder what 4 quintupled?", eatNumbers(4))

array = [390, 560, 433, 512, 809989999]
console.log("Numbers to eat", array)

var results = array.map(eatNumbers)
console.log("What numbers are we eating today? Please make it quintuple", results);

var results = array.map(function(x) {
    return x / 0.5
})

console.log("nvm I'll only have half of that:", results)

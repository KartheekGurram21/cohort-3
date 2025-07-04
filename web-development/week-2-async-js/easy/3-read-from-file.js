// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs");

console.log("hi from first line");

fs.readFile("1-counter.js", "utf-8", function(err, data) {
    console.log(data);
})


console.log("hi from 2nd line");

let c = 0;
for(let i=0;i<100;i++) {
    console.log("hi");
    c++;
}

console.log("hi from 3rd line");

for(let i=0;i<10000000;i++) {
    console.log("hello");
    c++;
}
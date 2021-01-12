// Pre Class Drill: 

// Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

// Ex:
// Input: 2
// Output: 3 (because 1 + 2 = 3)

// Input: 4
// Output: 10  (because 1 + 2 + 3 + 4 = 10)

// Input: 10
// Output: 55

// for loop with an iterator that counts down

function processInteger(num){
    var output =0;
    for(var i = num; i > 0; i--){
        console.log(i);
        output += i;
        console.log(,output);
    }
}

processInteger(4);
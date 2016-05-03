/*
   getPrimes by Brian Rollins (brianrollins.com)
   Copyright 2016
   Free to use with authorship credit intact.
   
   Usage
   
   **Get an array of prime numbers from 1 to 100.**
   var primes = getPrimes(1, 100); 
   
   **Get an array of prime numbers from 99 to 1011**
   **and log activity and messages to the console.**
   var morePrimes = getPrimes(99, 1011, true); 
   
   Params
   
   min : (Int) The first number in the range to check.
   max : (Int) The last number in the range to check.
   log : (Boolean) Turns on/off logging to the console.
   
*/
function getPrimes(min, max, log) {
    //Default logging to off.  
    if (typeof log === "undefined") {
        var log = false;
    }
    //Can't do primes under 1.
    if (min < 1) {
        min = 1;
        if (log) {
            console.warn("Starting number was less than 1, using 1 instead.");
        }
    }
    //Get rid of any decimals.
    min = Math.floor(min);
    max = Math.floor(max);
    var start = new Date(); //Get a timestamp of when we started.
    var foundLowest = false;
    var primeArray = []; //Initialize the output array.
    if (min <= max) {
        for (var i = min; i <= max; i++) {
            if (log) {
                console.log("Checking: " + i);
            }
            var divCount = 0;
            for (var t = 1; t <= i; t++) {
                if (i % t === 0) {
                    divCount++;
                }
            }
            if (divCount <= 2) {
                //It's a Prime! Grab it.
                primeArray.push(i);
                primeArray.highest = i;
                if (!foundLowest) {
                    primeArray.lowest = i;
                    foundLowest = true;
                }
            }
        } //End main loop.
    } else {
        primeArray.lowest = 0;
        primeArray.highest = 0;
        if (log) {
            console.error("Error: Starting value is larger than ending value. An empty array will be returned.");
        }
    }
    //End if min <= max.
    var end = new Date(); //Timestamp when we finished.        
    primeArray.duration = (end - start); //Total computation time.
    if (log) {
        console.log("Computation took " + primeArray.duration + "ms");
    }
    return primeArray;
}
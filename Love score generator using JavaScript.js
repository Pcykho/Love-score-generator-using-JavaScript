// Love score generator using JavaScript. Programmed by Pcykho Duke.
//  Special thanks to Angela Yu @ AppBrewary.


var yourName = prompt ("What's your name?");
var theirName = prompt("What's your crush's name?");

var n = Math.random();
n = n * 100;
n = Math.floor (n);
n = n + 1;

alert ( yourName + " and " + theirName +"'s matching score is " + n + "%" );
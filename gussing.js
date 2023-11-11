const prompt = require('prompt-sync')();

let x = Math.floor(Math.random() * 100)
let m = 0
let guss = 0
let score = 0

while(guss != x){

    guss = prompt("ENTER YOUR GUESS :- ")
    guss = Number.parseInt(guss)
    m = m+1

    if(guss > x){

        console.log("YOUR GUESS IS BIGGER THAN NUMBER")
    }
    else if(guss == x){

        console.log("CONGOOO YOU GOT A MATCH")
    }
    else{
        console.log("YOUR GUESS IS SMALLER THAN THE NUMBER")
    }
}

score = 100 - m
console.log("YOUR SCORE OUT OF 100 IS :- "  + score)
console.log("YOUR GUESSES WERE:- "+ m)
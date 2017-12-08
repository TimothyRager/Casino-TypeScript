/// <reference path="CrapsConsole.ts" />
///<reference path="BlackJackConsole.ts"/>

/// <reference path="User.ts" />

function updateDisplay(stringToDisplay: string): void {
    document.getElementById("display").innerHTML =+ "<br />" + stringToDisplay;
}

var craps:CrapsConsole = new CrapsConsole(new User("Tim", 1000));
var blackjack:BlackJackConsole = new BlackJackConsole(new User("Jim", 1000));
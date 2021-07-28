//Get Elements by ID here (!!!DO NOT USE ANYTHING BUT GET BY UNIQUE ID NO CLASS SELECTOR NO ELEMENT SELECTORS NO QUERY SELECTORS!!!)

//Global vars here
var score = "";
var timeleft = 90;

//function on start game clicked
var startGame = function() {
    //reset score to zero
    //reset time left
    //changes page to show choose elements for choose path and hide all others
    //two event listeners for choosing facebook or twitter path as well as stating the associated funtions below and starting timer
};
    
//timer function coundown to call end game once timer reaches zero and send user to score save
var timerCountdown = function() {
    //upon reaching zero go to submitscore function
};
    //function to start facebook path that changes page to show facebook posts to be read
var facebookPath = function() {
    //game elements show/other elements hide
    //fetch facebook post loop parse and display per each question
    //local function for correct clicks log correct clicks under score change post displayed
    //local function for correct or skip clicks change post displayed

}

document.getElementById('getJoke').addEventListener("click", function(){
    fetch(
        'https://official-joke-api.appspot.com/random_joke'
      )
        // Converts the response to JSON
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          // YOUR CODE HERE
           document.getElementById('question').innerHTML = response.setup;
           document.getElementById('answer').innerHTML =  response.punchline;
          
          
          console.log(response);
        });
});

    
//function to start twitter path
var twitterPath = function() {
    //game elements show/other elements hide
    //fetch facebook post loop parse and display per each question
    //log correct clicks under score
    //correct or skip clicks change post displayed
};

//function to input your name and submit highscore
var submitScore = function() {
    //submitscore elements show/other elements hide
    //capture input initals for score
    //add global score var & name to score array
    //if array in localstorage then add onto current array object
    //if array not in localstorage then add new array object
};

var displayScore = function() {
    //highscore page elements show/other elements hide
    //pull scores from localstorage
    //order scores in highest to lowest
    //append scores to the page
    //back to start event listener
};

var backToStart = function() {
    //start page elements show/other elements hide
}

//startGame button event listener
//highscore button event listener
//Get Elements by ID here (!!!DO NOT USE ANYTHING BUT GET BY UNIQUE ID NO CLASS SELECTOR NO ELEMENT SELECTORS NO QUERY SELECTORS!!!)

//Global vars here
var score = "";
var timeleft = 90;

//function on start game clicked
var startGame = function() {
    console.log('shit');
    //reset score to zero
    score = 0 ;
    //reset time left
    timeleft = 90;
    //changes page to show choose elements for choose path and hide all others
    $('.cardContainer').removeClass('hide')
    $('#instructions').addClass('hide')
    //two event listeners for choosing facebook or twitter path as well as stating the associated funtions below and starting timer
    $('#facebook').on('click',facebookPath)
    $('#twitter').on('click',twitterPath)
    
};
    
//timer function coundown to call end game once timer reaches zero and send user to score save
var timerCountdown = function() {
     
        
     
        //use the 'setInterval()' to call a function to be executed every 1000 milliseconds
        var timeInterval = setInterval(function() {
     
         console.log(timeleft)
            //As long as the 'timeleft' is greater than 1
            if (timeleft > 1) {
                //Set the 'textContent' of the 'timerEl' to show the remaining seconds
                timerEl.textContent = timeleft + 'seconds remaining';
                //Decrement 'timeleft' by 1
                timeleft--;
     
            }else if (timeleft ===1) {
                //When ttimeleftime left is equal to 1, rename to 'second' instead of seconds
                timerEl.textContent = timeleft + 'second remaining';
                timeleft--;
            } else {
                //Once 'timeLeft' gets to 0, set 'timerEl' to an empty string
                timerEl.textContent = '';
                //Use 'clearInterval()' to stop the timer
                clearInterval(timeInterval);
                //Call the 'displayMessage() function
                displayMessage();
            }
     
        }, 1000);
};
    //upon reaching zero go to submitscore function;
    //function to start facebook path that changes page to show facebook posts to be read
var JokePath = function() {
    //game elements show/other elements hide
<<<<<<< Updated upstream
    //fetch facebook post loop parse and display per each question
    //local function for correct clicks log correct clicks under score change post displayed
    //local function for correct or skip clicks change post displayed
    //document.getElementById('getJoke').addEventListener("click", function(){
        //    fetch(
        //        'https://official-joke-api.appspot.com/random_joke'
        //      )
        //        // Converts the response to JSON
        //        .then(function(response) {
        //          return response.json();
        //        })
        //        .then(function(response) {
        //          // YOUR CODE HERE
        //           document.getElementById('question').innerHTML = response.setup;
        //           document.getElementById('answer').innerHTML =  response.punchline;         
        //          
        //          console.log(response);
        //        });
}

//document.getElementById('getJoke').addEventListener("click", function(){
//    fetch(
//        'https://official-joke-api.appspot.com/random_joke'
//      )
//        // Converts the response to JSON
//        .then(function(response) {
//          return response.json();
//        })
//        .then(function(response) {
//          // YOUR CODE HERE
//           document.getElementById('question').innerHTML = response.setup;
//           document.getElementById('answer').innerHTML =  response.punchline;         
//          
//          console.log(response);
//        });
//});
=======
    document.getElementById('jokeParentElement').classlist.add('hide')
    document.getElementById('gamePageParentEl').classlist.remove('hide')

    //fetch facebook post loop parse and display per each question
    document.getElementById('getJoke').addEventListener("click", getJokeApi)

    var getJokeApi = function() {
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
        document.getElementById('correctbutton').addEventListener('click', function(){
            score++
            getJokeApi();
        }); 
        document.getElementById('wrongbutton').addEventListener('click', function(){
            getJokeApi();
        });

    }
}   
    //local function for correct clicks log correct clicks under score change post displayed
    //local function for correct or skip clicks change post displayed
>>>>>>> Stashed changes

    
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

$('#begin-btn').on('click',startGame)
//highscore button event listener
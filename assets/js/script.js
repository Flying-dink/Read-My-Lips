//Get Elements by ID here (!!!DO NOT USE ANYTHING BUT GET BY UNIQUE ID NO CLASS SELECTOR NO ELEMENT SELECTORS NO QUERY SELECTORS!!!)
var timerEl = document.getElementById('timerEl');

//Global vars here
var score = 0;
var timeleft = 90;
var RMLGameScoresArr = [];
var RMLGameScoreObj = {};

//function on start game clicked
var startGame = function() {
    console.log('shit');
    //reset score to zero
    score = 0 ;
    console.log(score);
    //reset time left
    timeleft = 90;
    //changes page to show choose elements for choose path and hide all others
    $('.cardContainer').removeClass('hide')
    $('#instructions').addClass('hide')
    //two event listeners for choosing facebook or twitter path as well as stating the associated funtions below and starting timer
    $('#getJoke').on('click',JokePath)
    $('#giphy').on('click',giphyPath)
    
};
    
//timer function coundown to call end game once timer reaches zero and send user to score save
var timerCountdown = function() {
     
        //use the 'setInterval()' to call a function to be executed every 1000 milliseconds
        var timeInterval = setInterval(function() {
     
         console.log(timeleft)
            //As long as the 'timeleft' is greater than 1
            if (timeleft > 1) {
                //Set the 'textContent' of the 'timerEl' to show the remaining seconds
                timerEl.textContent = timeleft + ' seconds remaining';
                //Decrement 'timeleft' by 1
                timeleft--;
     
            }else if (timeleft ===1) {
                //When ttimeleftime left is equal to 1, rename to 'second' instead of seconds
                timerEl.textContent = timeleft + ' second remaining';
                timeleft--;
            } else {
                //Once 'timeLeft' gets to 0, set 'timerEl' to an empty string
                timerEl.textContent = '';
                //Use 'clearInterval()' to stop the timer
                clearInterval(timeInterval);
                //Call the 'displayMessage() function
                displayScore();
            }
     
        }, 1000);
};
    //upon reaching zero go to submitscore function;
    //function to start Jokepath that changes page to show joke posts to be read
var JokePath = function() {
    
    //game elements show/other elements hide
    $('#jokeParentEl').addClass('hide')
    $('#gamePageParEl').removeClass('hide')
    //event listener to grab click from correct button, and increase final score by one,and re-run the GetJokeApi
    document.getElementById('correctbutton').addEventListener('click', function(){
        score++;
        console.log(score);
        getJokeApi();
    }); 
    //event listener to grab click from wrong button, and re-run the getJokeApi
    document.getElementById('wrongbutton').addEventListener('click', function(){
        getJokeApi();
    }); 
    //calls the GetJokeApi function
    getJokeApi();
    //calls the timerCountDown function
    timerCountdown();

}

    //fetch joke post loop parse and display per each question
var getJokeApi = function() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      
    // Converts the response to JSON
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
    // Takes the value of 'set up' and add that response to the question ID
           document.getElementById('question').innerHTML = response.setup;
    // Takes the value of 'punchline' and add that response to the answer ID
           document.getElementById('answer').innerHTML =  response.punchline;
          
          console.log(response);
        });
}

    //function to start giphyPath that changes page to new giphy 
    var giphyPath = function() {
    console.log('test')
    //game elements show/other elements hide
    $('#jokeParentEl').addClass('hide')
    $('#gamePageParEl').removeClass('hide')
    $('#answer').addClass('hide')
    $('#giphyPic').removeClass('hide')
    //event listener to grab click from correct button, and increase final score by one, and re-run the GetGiphyApi
    document.getElementById('correctbutton').addEventListener('click', function(){
        score++;
        getGiphyApi();
    });
    //event listener to grab click from wrong button, and re-run the getGiphyApi
    document.getElementById('wrongbutton').addEventListener('click', function(){
        getGiphyApi();
    }); 
    //calls the GetGiphyApi function
    getGiphyApi();
    //calls the timerCountDown function
    timerCountdown();
};
    //fetch giphy loop parse and display per each question
var getGiphyApi = function() {
    console.log(score);
    fetch('https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN')
    
    // Converts the response to JSON
    .then(function(response) {
    return response.json();
    })
    .then(function(response) {
    //attach the response to the giphyPic ID
var myImage = document.getElementById('giphyPic');
    console.log(response);
        console.log(myImage.src)
        console.log(response.data.image_url)
        $('#giphyPic').attr("src",response.data.image_url);
            
    // change the text of the question ID
    document.getElementById('question').textContent = "Describe the picture!"
    })
};   

    // Function to display score
var displayScore = function() {
     //game elements show/other elements hide
    $('#gamePageParEl').addClass('hide')
    $('#timesUpEls').removeClass('hide')
    //variable to hold the ID 'highScoreSubmit'
    var inputSubmit =document.getElementById('highScoreSubmit');
    //grab the finalScoreDisplay ID and set its content
    document.getElementById('finalScoreDisplay').textContent =  "Your Final Score is: " + score ;
    // event handler to grab click, before displaying final score
    $('#submitScoreBtn').on('click',function(event) {
    // prevents the browser from refreshing after each click
        event.preventDefault();
        var name = inputSubmit.value;
        console.log(name);
        console.log(score);
        RMLGameScoreObj = {
            name: name,
            value: score
        }
        // call the saveScore function
        saveScores();
        // call the DisplayHighScore function
        displayHighScore();    
    })
};
    
        // Function to save score
var saveScores = function() {
        //variable to hold score from local storage
    var currentSavedScores = localStorage.getItem("RMLScores");
        //if statement checks if currentSavedScores has a null value
    if (!currentSavedScores) {
        console.log(RMLGameScoreObj);
        // Adds "RMLGameScoreObj"
        RMLGameScoresArr.push(RMLGameScoreObj); 
        //converts a object or value to JSON string
        localStorage.setItem("RMLScores", JSON.stringify(RMLGameScoresArr)); 
        
        //parses JSON string
    } else {
        currentSavedScores = JSON.parse(currentSavedScores);
        // Adds "RMLGameScoreObj"
        currentSavedScores.push(RMLGameScoreObj);
        //converts a object or value to JSON string
        localStorage.setItem("RMLScores", JSON.stringify(currentSavedScores));
    };
};
        // Function to display high score
var displayHighScore = function() {
        //game elements show/other elements hide
    $('#timesUpEls').addClass('hide');
    $('#mainElGroup').addClass('hide');
    $('#highScoreElGroup').removeClass('hide');
        //variable to grab highscore ID
    var scoreList = document.getElementById('highScores');

        //button to go back to start screen
    $('#backToStart').on('click',reset);
        //create score list from local storage
    var createScoreEl = function(savedScoresObj){
        //create li element and set it to ScoreLi variable
        var scoreLi = document.createElement('li');
        console.log(scoreLi)
        //attach ScoreLi variable to list
        scoreList.appendChild(scoreLi);
        //set the Li element attribute
        scoreLi.setAttribute("id", "li");
        scoreLi.setAttribute("value", savedScoresObj.value)
        scoreLi.classList.add("bText");
        scoreLi.innerHTML= savedScoresObj.name + " - " + savedScoresObj.value + ".";
    };

    var savedScores = localStorage.getItem("RMLScores");

    if (!savedScores) {
        console.log("click1");
        return false;
    }
    console.log("Saved tasks found!");
    savedScores = JSON.parse(savedScores);
    console.log(savedScores);

    for (var i = 0; i < savedScores.length; i++) {
        createScoreEl(savedScores[i]);
    }
    //sort list of high scores from highest to lowest
    var sortList = function() {
        var list, i, switching, b, shouldSwitch;
        list = document.getElementById("highScores");
        switching = true;
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
          // start by saying: no switching is done:
          switching = false;
          b = list.getElementsByTagName("li");
          // Loop through all list-items:
          for (i = 0; i < (b.length - 1); i++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should
            switch place with the current item: */
            if (b[i].value < b[i + 1].value) {
              /* if next item is alphabetically
              lower than current item, mark as a switch
              and break the loop: */
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
          }
        }
    };
    sortList();
};

var reset = function() {
    location.reload();
    return false;
}

//startGame button event listener

$('#begin-btn').on('click',startGame)
$('#viewHighbtn').on('click',displayHighScore)
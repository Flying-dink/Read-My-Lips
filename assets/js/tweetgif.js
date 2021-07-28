
var giphyPath = function() {
console.log('test');
$('#jokeParentEl').addClass('hide')
$('#gamePageParEl').removeClass('hide')

$('getJoke').addEventListener('click', getGiphyApi)
}

var getGiphyApi = function() {

fetch('https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN')
 // Converts the response to JSON
 .then(function(response) {
  return response.json();
 })
 .then(function(response) {


  var myImage = document.createElement('giphy')
  console.log(response);

   myImage.src = response.data.image_url

  document.getElementById('question').textContent = "Describe the picture!"
 });

 document.getElementById('correctbutton').addEventListener('click', function(){
    score++
        getGiphyApi();
 });

 document.getElementById('wrongbutton').addEventListener('click', function(){
        getGiphyApi();
 })};

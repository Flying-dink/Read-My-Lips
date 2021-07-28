var griphyPath = function() {

document.getElementById('').classList.add('hide')
document.getElementById('').classList.add('hide')
};

var getGiphyApi = function(){


fetch('https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN')
 // Converts the response to JSON
 .then(function(response) {
  return response.json();
 })
 .then(function(response) {
  // Use 'querySelector' to get the ID of where the GIF will be displayed
  // YOUR CODE HERE
   var myResponse = document.querySelector('#')
  // Create an '<img>' element
  // YOUR CODE HERE
  var myImage = document.createElement('')
  console.log(response);
  // Set that element's 'src' attribute to the 'image_url' from our Giphy API response
  // YOUR CODE HERE
   myImage.src = response.data.image_url
  // Append the '<img>' element to the page
  // YOUR CODE HERE
  myResponse.appendChild(myImage);

  document.getElementById('').textContent = ""
 })};

 document.getElementById('correctbutton').addEventListener('click', function(){
    score++
      getGiphyApi();
 };

 document.getElementById('wrongbutton').addEventListener('click', function(){
        getGiphyApi();
 };

//javascript code goes here

//variables for possible (set the array) Array: Iron Man, Odinson, Black Widow, Captain America, Vision
//user press start - load in word
        //random?
        // begin timer
        //replace some character with _
            //math.random?
            //fuction to obscure letters?
            // for every letter in the loop variable make them underscores
            //letters to obscure per word?
//counter begins countdown
//function
    //array of words, use split method to split the array
    //JSON.stringify creates an JSON object
    //string for full correct word
    //conditional statement to match user inpiut in the string
//event listener at the end, call

var wordList = ["Iron Man", "Odinson", "Black Widow", "Captain America", "Vision"];
function startRound() {
    // var thisRoundWord = wordList[(Math.floor(Math.random()*WordList.length))]
    // return thisRoundWord;
    // console.log(thisRoundWord);
}
var startButton = document.getElementByID("sb");
startButton.addEventListener("click", startRound);
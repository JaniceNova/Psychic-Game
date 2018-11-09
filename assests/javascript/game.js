var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s","d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
//var myChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s","d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var computerChoices = ["a"];

var winsScore = 0;
var losesScore = 0;
var guessScore = 10;

$('#wins').append(winsScore);
$('#loses').append(losesScore);
$('#guessleft').append(guessScore);

//$('#guessleft').onkeyup
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var myChoices = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Only run the following code block if the user presses "r" or "p" or "s".
    if (myChoices === "a") {    
      
          for (var i = 0; i>=0; i--){
            guessScore--;
            $('#guessleft').html(guessScore);
            if (guessScore == 0){
            losesScore++;
            if (guessScore === 0) {
                guessScore = 10;
            }
             $('#loses').html(losesScore);}
             if (computerChoices === myChoices) {
        winsScore++;  $('#wins').html(winsScore);
        }
    
        }
         }

         }
    





//"q" || "w" || "e" || "r" || "t" || "y" || "u" || "i" || "o" || "p" || "a" || "s" || "d" || "f" || "g" || "h" || "j" || "k" || "l" || "z" || "x" || "c" || "v" || "b" || "n" || "m" 
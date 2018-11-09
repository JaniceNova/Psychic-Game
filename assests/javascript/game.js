var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];



var winsScore = 0;
var losesScore = 0;
var guessScore = 10;
var letter = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

$('#wins').append(winsScore);
$('#loses').append(losesScore);
$('#guessleft').append(guessScore);
 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function (event) {

    // Determines which key was pressed.
    var myChoices = event.key;
var letterGuessWrite = function () {
            var div = $("<div>");
            div.text(myChoices);
            console.log(myChoices);
            $("#lettersguessed").append(div);
        }
   
    console.log(computerGuess)
    
    if (myChoices === "a" || myChoices === "s" || myChoices === "d" || myChoices === "f" || myChoices === "g" || myChoices === "h" || myChoices === "j" || myChoices === "k" || myChoices === "l") {

       

        
        letterGuessWrite();

        for (var i = 0; i >= 0; i--) {
            guessScore--;
            $('#guessleft').html(guessScore);
            if (guessScore == 0) {
                losesScore++;
                $('#loses').html(losesScore);
                 computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }
            if (guessScore === 0) {
                guessScore = 10;
                

            

            }

            if (computerGuess === myChoices) {
                winsScore++; $('#wins').html(winsScore);
                guessScore = 10;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            }

        }
    }

}







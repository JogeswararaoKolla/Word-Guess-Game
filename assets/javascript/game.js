//Varaible Declaration 

let currentWordList = ["Apple", "Oranges"];
let currentWord;
let currentWordTmp = [];
let i = 0;

let GuessSoFar = [];


currentWord = currentWordGet(currentWordList[1]);

console.log(currentWordList[1], currentWord);

function currentWordGet(wordTmp) {

    for (i = 0; i < wordTmp.length; i++) {
        currentWordTmp.push("-");
    }
    console.log(currentWordTmp, currentWordTmp.length);
    document.getElementById("current-word").innerText = currentWordTmp.join('');
    return currentWordTmp.join('');

}


document.onkeyup = function (event) {

    console.log(String.fromCharCode(event.keyCode));
    let user_key = String.fromCharCode(event.keyCode);

    console.log(currentWordList[1]);

    let guessWord = currentWordList[1];

    let guessWordList = guessWord.split('');
    console.log(guessWordList);
    console.log(guessWord.split(''));



}

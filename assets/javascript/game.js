// Global Variable Declarations
let currentWordList = ["Grapes", "Apples", "Strawberries", "Lychee", "Watermelon", "Oranges", "Mango", "rasberries", "pineapple", "Pears"];
let imagesList = ["Grapes.jpeg",
    "Apples.jpeg",
    "Strawberries.jpeg",
    "Lychee.jpeg",
    "Watermelon.jpeg",
    "Oranges.jpeg",
    "Mango.jpeg",
    "rasberries.jpeg",
    "pineapple.jpeg",
    "Pears.jpeg"];

let currentWordTmp = [];
let i = 0,
    startIdx = 0,
    lastIndex = 0;
let noOfGuess = 0;
let randIdx = 0;
let userKeyPress = [];
let gameOverStats = false;
let winStats = false;
let winsCount = 0;
let losesCount = 0;
let guessWord = '';
let guessWordList = [];

let guessWordObj = {};

let guessWordObjArray=[];
let noOfGuessArray=[];

function CreateGuessword() {
    for (let i = 0; i < currentWordList.length; i++) {
            let guessWordObj={
                word:currentWordList[i],
                wordimage:imagesList[i]
            }
         guessWordObjArray.push(guessWordObj);

            }
        console.log(guessWordObjArray);
}


CreateGuessword();

function startWordGuessGame() {
    userKeyPress = [];
    winStats = false;
    gameOverStats = false;
    startIdx = 0;
    lastIndex = 0;
    noOfGuess = 0;
    noOfGuessArray=[];
    randIdx = Math.floor(Math.random() * guessWordObjArray.length);
    console.log(guessWordObjArray[randIdx]);
    currentWordTmp.length = guessWordObjArray[randIdx].word.length;
    currentWordTmp.fill('-');
    guessWord = guessWordObjArray[randIdx].word.toLowerCase();
    guessWordList = Array.from(guessWord);


      // Code to capture the unique  guess  word letters to determine the no of guesses
      for(let k=0;k<guessWordList.length;k++){
        if (noOfGuessArray.indexOf(guessWordList[k]) == -1) {
            noOfGuessArray.push(guessWordList[k]);
        }
      }
      console.log(noOfGuessArray,noOfGuessArray.length);
      noOfGuess = Math.round(noOfGuessArray.length + ((50*noOfGuessArray.length)/100));
     console.log("noOfGuess : " + noOfGuess);

    console.log(guessWordList);
    console.log(guessWordObjArray[randIdx].wordimage);
    document.getElementById("imageID").src = "../assets/images/" + guessWordObjArray[randIdx].wordimage;
    document.getElementById("current-word").innerText = currentWordTmp.join('');
    document.getElementById("noofguess").innerText = noOfGuess;
    document.getElementById("letter-guessed").innerText = userKeyPress.join();
    document.getElementById("wins").innerText = winsCount;
    document.getElementById("loses").innerText = losesCount;
}

function arrayEqualsCheck(arr1, arr2) {
    if (arr1.length != arr2.length) {
        winStats = false;
        return winStats;
    }
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            winStats = false;
            return winStats;
        }
    }
    winsCount++;
    document.getElementById("wins").innerText = winsCount;
    winStats = true;
    gameOverStats = true;
    return winStats;
}

function validateCharCode(charValue) {
    if (!(charValue >= 65 && charValue <= 90)) {
        console.log(charValue);
        alert("Not a valid Character letter");
        return false;
    }
    else {
        return true;
    }

}

let images = ["Grapes.jpeg",
    "Apples.jpeg",
    "Strawberries.jpeg",
    "Lychee.jpeg",
    "Watermelon.jpeg",
    "Oranges.jpeg",
    "Mango.jpeg",
    "rasberries.jpeg",
    "pineapple.jpeg",
    "Pears.jpeg"];

startWordGuessGame();

document.onkeyup = function (event) {

    let user_key = String.fromCharCode(event.keyCode).toLowerCase();
    // Code to capture the unique user guess letters 
    if (validateCharCode(event.keyCode) && (userKeyPress.indexOf(user_key) == -1)) {
        userKeyPress.push(user_key);
        noOfGuess--;
    }
    document.getElementById("letter-guessed").innerText = userKeyPress.join();
    document.getElementById("noofguess").innerText = noOfGuess;

    if (noOfGuess == 0) {
        gameOverStats = true;
        if (!winStats) {
            losesCount++;
            document.getElementById("loses").innerText = losesCount;
        }
    }

    if (!gameOverStats) {
        if (guessWordList.includes(user_key)) {
            startIdx = guessWordList.indexOf(user_key);
            lastIndex = guessWordList.lastIndexOf(user_key);
            for (i = startIdx; i <= lastIndex; i++) {
                if (guessWordList[i] == user_key) {
                    currentWordTmp[i] = user_key;
                }
            }
            document.getElementById("current-word").innerText = currentWordTmp.join('');
            arrayEqualsCheck(currentWordTmp, guessWordList);
            console.log(currentWordTmp, guessWordList);
        }

    }
    else {
        startWordGuessGame();
    }

}
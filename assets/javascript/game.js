// Global Variable Declarations
let currentWordList = ["apple", "oroangoes"];
let currentWord;
let currentWordTmp = [];
let i = 0;
let GuessSoFar = [];
let startIdx = 0;
let lastIndex = 0;
let noOfGuess = 15;
let userKeyPress = [];
let gameOverStats = false;
let winStats = false;
let winsCount=0;
let temp=[];


currentWordGet(currentWordList[0]);

temp.length=currentWordList[0].length;

console.log(temp.length);
temp.fill('-');

console.log(temp);


function startWordGuessGame(){
    GuessSoFar = [];

}

// console.log(currentWordList[0], currentWord);

function currentWordGet(wordTmp) {

    for (i = 0; i < wordTmp.length; i++) {
        currentWordTmp.push("-");
    }
    console.log(currentWordTmp);
    document.getElementById("current-word").innerText = currentWordTmp.join('');
    return currentWordTmp.join('');

}

function removeDuplicatesArray(arr) {
    let unique_array = []
    for (let Idx = 0; Idx < arr.length; Idx++) {
        if (unique_array.indexOf(arr[Idx]) == -1) {
            unique_array.push(arr[Idx])
        }
    }
    return unique_array
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
    return winStats;
}

document.onkeyup = function (event) {

    console.log(String.fromCharCode(event.keyCode).toLowerCase());
    let user_key = String.fromCharCode(event.keyCode).toLowerCase();


    if (userKeyPress.indexOf(user_key) == -1) {
        userKeyPress.push(user_key);
        noOfGuess--;
    }

    console.log(noOfGuess);
    console.log(userKeyPress);

    let guessWord = currentWordList[0];
    let guessWordList = guessWord.split('');
    let guessWordListTmp = Array.from(guessWord);

    console.log(guessWordListTmp);

    //The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
    // console.log(guessWordList);
    // console.log(guessWord.split(''));


    if (guessWordList.includes(user_key)) {
        startIdx = guessWordList.indexOf(user_key);
        console.log("Start Index " + startIdx);
        lastIndex = guessWordList.lastIndexOf(user_key);
        console.log("last Index " + lastIndex);
        GuessSoFar.push(user_key);
        for (i = startIdx; i <= lastIndex; i++) {
            if (guessWordList[i] == user_key) {
                console.log("Matching Indexes are:", i);
                currentWordTmp[i] = user_key;
                console.log(currentWordTmp, currentWordTmp.length);
            }
            console.log(currentWordTmp.join(''), currentWordTmp.length);
        }
        document.getElementById("current-word").innerText = currentWordTmp.join('');
        arrayEqualsCheck(currentWordTmp, guessWordListTmp);

        console.log(currentWordTmp, guessWordListTmp);
        console.log("Wins Stats : " + winStats);
    }


}



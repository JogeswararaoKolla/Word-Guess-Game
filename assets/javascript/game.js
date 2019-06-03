// Global Variable Declarations
let currentWordList = ["apple", "oranges", "bananas", "lime"];
let currentWordTmp = [];
let i = 0,
    startIdx = 0,
    lastIndex = 0;
let noOfGuess = 15;
let randIdx = 0;
let userKeyPress = [];
let gameOverStats = false;
let winStats = false;
let winsCount = 0;
let losesCount = 0;
let guessWord = '';
let guessWordList = [];


function startWordGuessGame() {
    userKeyPress = [];
    winStats = false;
    gameOverStats = false;
    startIdx = 0;
    lastIndex = 0;
    noOfGuess = 15;
    randIdx = Math.floor(Math.random() * currentWordList.length);
    console.log(randIdx);
    currentWordTmp.length = currentWordList[randIdx].length;
    currentWordTmp.fill('-');
    guessWord = currentWordList[randIdx];
    guessWordList = Array.from(guessWord);
    console.log(guessWordList);
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
            losesCount++;
            return winStats;
        }
    }
    winsCount++;
    document.getElementById("wins").innerText = winsCount;
    document.getElementById("loses").innerText = losesCount;
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

// Jquery will change only one ID element. 
$("#idimgbutton").on("click",function(){
     $(".idImg").attr("src","/Users/jogeswararaokolla/Documents/Images/pineapple.jpeg");
});

let images=["Grapes.jpeg",
    "Apples.jpeg",
    "Strawberries.jpeg",
    "Lychee.jpeg",
    "Watermelon.jpeg",
    "Oranges.jpeg",
    "Mango.jpeg",
    "rasberries.jpeg",
    "pineapple.jpeg",
    "Pears.jpeg"];

$("#idimgbuttonall").on("click",function(){
   
   $("#NewImages").empty();
    
  for (let j=0;j<images.length;j++)
  { 
      let image_local=$("<img>");
      let image_path="/Users/jogeswararaokolla/Documents/Images/"+ images[j];
      image_local.addClass("imgnewImages");
      image_local.attr("src",image_path);
      image_local.attr("width",200);
      image_local.attr("height",200);

      console.log(image_path);
      $("#NewImages").append(image_local);
  }

});

$("#idbuttonchgall").on("click",function(){
    $("#idimgbuttonall").hide();
    $(".imgnewImages").attr("src","/Users/jogeswararaokolla/Documents/Images/pineapple.jpeg");
});


startWordGuessGame();

document.onkeyup = function (event) {

    let user_key = String.fromCharCode(event.keyCode).toLowerCase();

    if (validateCharCode(event.keyCode) && (userKeyPress.indexOf(user_key) == -1)) {
        userKeyPress.push(user_key);
        noOfGuess--;
    }
    document.getElementById("letter-guessed").innerText = userKeyPress.join();
    document.getElementById("noofguess").innerText = noOfGuess;

    if (noOfGuess == 0) {
        gameOverStats = true;
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

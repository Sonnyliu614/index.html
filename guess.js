const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const guesses = document.querySelector(".guesses");
const restartBtn = document.querySelector(".restartBtn");

// 1. 產生 1-100 的隨機整數
let randomNumber = Math.floor(Math.random() * 100) + 1;
let countNum = 0; 

function checkGuess() {
    // 2. 點擊按鈕時才獲取數值
    const userGuess = Number(guessField.value);
    
    if (countNum === 0) {
        guesses.textContent = "上次猜過的數字: ";
    }
    guesses.textContent += userGuess + " ";

    countNum++;
    count.textContent = "猜測次數：" + countNum;

    // 3. 在函式內進行邏輯判斷
    if (userGuess === randomNumber) {
        result.textContent = "猜測結果：Congratulations!";
        result.style.backgroundColor = "green";
        setGameOver();
    } else {
        if (userGuess < randomNumber) {
            result.textContent = "猜測結果：數字太小!";
        } else if (userGuess > randomNumber) {
            result.textContent = "猜測結果：數字太大!";
        }
        result.style.backgroundColor = "red";
    }

    // 清空輸入框並聚焦，方便下次輸入
    guessField.value = "";
    guessField.focus();
}

// 綁定點擊事件
guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    alert("遊戲結束！");
}

function initGame() {
    // 重設遊戲邏輯
    countNum = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    result.textContent = "";
    guesses.textContent = "";
    count.textContent = "";
    result.style.backgroundColor = "transparent";
}

restartBtn.addEventListener("click", initGame);
restartBtn.addEventListener("click", initGame);



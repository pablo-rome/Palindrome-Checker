const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const resetBtn = document.querySelector("#reset-btn");
const result = document.querySelector("#result");

const resetText = () => {
    result.innerText = "Awaiting input…";
};

const checkPalindrome = () => {
    const arrayInput = Array.from(textInput.value)
        .filter((item) => /[a-zA-Z0-9]/.test(item))
        .map((item) => item.toLowerCase());
    const arrayInputCopy = [...arrayInput];
    const arrayInputReverse = [];

    for (let i = 0; i < arrayInput.length; i++) {
        arrayInputReverse.push(arrayInputCopy.pop());
    }
    if (textInput.value.trim() === "") {
        result.innerText = "Please input a value";
        const warning = "Please input a value";
        alert(warning);
        return;
    }
    if (arrayInput.join("") === arrayInputReverse.join("")) {
        result.innerText = `${textInput.value} is a palindrome`;
    } else {
        result.innerText = `${textInput.value} is not a palindrome`;
    }
};

document.addEventListener("DOMContentLoaded", resetText);
resetBtn.addEventListener("click", resetText);
checkBtn.addEventListener("click", checkPalindrome);

"use strict";

const inputInfo = document.getElementsByClassName("inputGroup")[0];
const button = document.getElementById("inputButton");

function handleButton(buttonValid) {
    if(buttonValid) {
    button.disabled = false;        
    } else {
    button.disabled = true;
    }
    
    if (window.event.keyCode === 13) {
        goToMain();
    }
}

function checkId(value) {
    if (value.length > 0) {
        return true;
    } else {
        return false;
    }
}

function checkPw(value) {
    if (value.length > 0) {
        return true;
    } else {
        return false;
    }
}

function handleInput() {
    const userId = document.getElementById("userInfo").value;
    const userPw = document.getElementById("userPw").value;

    const isValidId = checkId(userId); 
    const isValidPw = checkPw(userPw);

    if (isValidId && isValidPw) {
       handleButton(true);
    } else {
       handleButton(false);
    }
}

function goToMain() {
    alert("환영합니다!:)");
    location.href='http://127.0.0.1:5500/main.html'
}

const init = () => {
    inputInfo.addEventListener("input", handleInput);
    inputInfo.addEventListener("keyup", handleInput);
    button.addEventListener("click", goToMain);
};

init();
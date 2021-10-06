"use strict";

const inputInfo = document.getElementsByClassName("inputGroup")[0];
// input tag의 갯수만큼 하위 갯수에 다 걸림 console.log(inputinfo) form 하위 태그 다나와 
//classname은 배열로 받아오는데, 복수일 수 있어 그래서 하나의 첫번째로 접근해야해서 인덱스써써 
const button = document.getElementById("inputButton");

function handleButton(buttonValid) {
    if(buttonValid) {
    button.disabled = false;        
    } else {
    button.disabled = true;
    }
    //button.disabled = !buttonValid ? true : false;
    
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
    location.replace('http://127.0.0.1:5500/main/main.html')
}

const init = () => {
    inputInfo.addEventListener("input", handleInput);
    inputInfo.addEventListener("keyup", handleInput);
    button.addEventListener("click", goToMain);
};

init();
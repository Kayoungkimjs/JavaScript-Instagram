"use strict";

const replyList = document.getElementById("replyList");
const replyInput = document.getElementById("replyInput");
const replyButton = document.getElementById("replyButton");

function addReply(replyValue) {
    const newReply = document.createElement("li");
    const newName = document.createElement("span");
    const newContent = document.createElement("span");

    newName.classList.add("name");
    newName.innerText = "kayoung";
    newContent.innerText = replyValue;

    newReply.appendChild(newName);
    newReply.appendChild(newContent);

    replyList.appendChild(newReply);
    replyInput.value="";
}


function validateReply() {
    const replyValue = replyInput.value;
    if(replyValue.length > 0) {  
        addReply(replyValue);
    } else {
        alert("댓글을 입력해주세요.")
    }
}

function init() {
    replyButton.addEventListener("click", validateReply);
}

init();

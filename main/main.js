"use strict";

const replyInput = document.getElementById("replyInput");
const replyButton = document.getElementById("replyButton");

function addReply(value) {
    const replyList = document.getElementById("#replyList");
    const newLists = document.createElement("li");
    const newContent = `<span class="name">kayoung</sapn>
    <span class="description">${value}</span>
    <span class="delete">x</span>`
    
    newLists.innerHTML = newContent;
    deleteEvent(newLists);
    replyList.appendChild(newLists);

    replyInput.value = "";
}

function deleteEvent(newLists) {
    const deletebutton = document.querySelector(".delete");
    deletebutton.addEventListener("click", () => newLists.remove())
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

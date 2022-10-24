const newNote = document.getElementById("newNote")
const inputArea = document.getElementById("inputArea")
const submitNewNote = document.getElementById("submitNewNote")
const listOfNotes = document.getElementById("listOfNotes")
const clearStorage = document.getElementById("clearStorage")

import {generateNotes} from "./app"

submitNewNote.addEventListener("click", event => {
    event.preventDefault();
    const noteText = inputArea.value
    // console.log('noteText:', noteText)
    const id = Date.now()
    // console.log(id);
    if (inputArea.value) {
        localStorage.setItem(id, noteText)
    }
    generateNotes();
    // console.log('listOfNotes.innerHTML:', listOfNotes.innerHTML)
})

clearStorage.addEventListener("click", event => {
    event.preventDefault;
    localStorage.clear();
    console.log(localStorage);
})

console.log('localStorage:', localStorage)

// localStorage.clear();

// console.log("lS after...", localStorage);
import {generateNotes} from './handler.js';

const newNote = document.getElementById("newNote")
const inputArea = document.getElementById("inputArea")
const submitNewNote = document.getElementById("submitNewNote")
const listOfNotes = document.getElementById("listOfNotes")
const clearStorage = document.getElementById("clearStorage")



submitNewNote.addEventListener("click", event => {
    event.preventDefault();
    const noteText = inputArea.value
    // console.log('noteText:', noteText)
    const id = Date.now()
    // console.log(id);
    if (inputArea.value) {
        localStorage.setItem(id, noteText)
    }
    generateNotes(listOfNotes);
    // console.log('listOfNotes.innerHTML:', listOfNotes.innerHTML)
})

clearNotes.addEventListener("click", event => {
    event.preventDefault;
    localStorage.clear();
    listOfNotes.in
    console.log(localStorage);
})

console.log('localStorage:', localStorage)

// localStorage.clear();

// console.log("lS after...", localStorage);
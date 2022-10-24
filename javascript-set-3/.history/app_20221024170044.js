import { generateNotes } from './handler.js';

const newNote = document.getElementById("newNote")
const inputArea = document.getElementById("inputArea")
const submitNewNote = document.getElementById("submitNewNote")
const listOfNotes = document.getElementById("listOfNotes")
const clearStorage = document.getElementById("clearStorage")

generateNotes(listOfNotes)

submitNewNote.addEventListener("click", event => {
    event.preventDefault();
    let noteText = inputArea.value
    // console.log('noteText:', noteText)
    const id = new Date(Date.now()
    console.log('id:', id)
    if (inputArea.value) {
        localStorage.setItem(id, noteText)
    }
    generateNotes(listOfNotes);
    // console.log('listOfNotes.innerHTML:', listOfNotes.innerHTML)
    inputArea.value = "";
    // console.log('localStorage:', localStorage)
})

clearNotes.addEventListener("click", event => {
    event.preventDefault();
    localStorage.clear();
    listOfNotes.innerHTML = "";
    // console.log('localStorage:', localStorage)
})



// localStorage.clear();

// console.log("lS after...", localStorage);
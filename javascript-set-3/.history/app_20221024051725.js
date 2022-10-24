const newNote = document.getElementById("newNote")
const inputArea = document.getElementById("inputArea")
const submitNewNote = document.getElementById("submitNewNote")

console.log(inputArea);
console.log(submitNewNote);

submitNewNote.addEventListener("click", event => {
    event.preventDefault();
    console.log(inputArea.textContent)
} )
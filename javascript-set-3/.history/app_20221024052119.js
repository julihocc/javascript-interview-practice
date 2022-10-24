const newNote = document.getElementById("newNote")
const inputArea = document.getElementById("inputArea")
const submitNewNote = document.getElementById("submitNewNote")

console.log(inputArea);
console.log(submitNewNote);

inputArea.addEventListener("change", e => {
    console.log(this.textContent);
})

submitNewNote.addEventListener("click", event => {
    event.preventDefault();
    console.log(inputArea.textContent)
} )
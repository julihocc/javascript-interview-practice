const inputArea = document.getElementById("inputArea")
const submitNewNote = document.getElementById("submitNewNote")

submitNewNote.addEventListener("submit", event => {
    console.log(inputArea.value)
} )
const createNoteDiv = (element, key, currentNote) => {
    element.innerHTML += "<div>"
}

const generateNotes = (element) => {
    for (const key in localStorage) {
        // Skip built-in properties like length, setItem, etc.
        if (localStorage.hasOwnProperty(key)) {
            let currentNote = localStorage.getItem(key)
            createNoteDiv(element, key, currentNote)
        }
    }
}

export { generateNotes };
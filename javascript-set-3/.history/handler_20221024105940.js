const generateNotes = () => {
    for (const key in localStorage) {
        // Skip built-in properties like length, setItem, etc.
        if (localStorage.hasOwnProperty(key)) {
            let currentNote = localStorage.getItem(key)
            createNoteDiv(key, currentNote)
        }
    }
}

export { generateNotes };
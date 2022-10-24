const createNoteDiv = (element, key, currentNote) => {
    // element.innerHTML += `<li id="${key}">${currentNote}</li>`
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', key)
    newDiv.setAttribute('class', 'note')
    const newPar = document.createElement('p')
    newPar.setAttribute('class', 'noteTextContent')
    newPar.innerHTML = currentNote
    newDiv.appendChild(newPar)
    element.appendChild(newDiv)
}

const addDeleteButton = (child) => {
    const newButton = document.createElement('input');
    newButton.setAttribute('type', 'submit')
    newButton.setAttribute('value', 'Delete Note')
    newButton.addEventListener('click', event => {
        event.preventDefault();
        child.remove()
        const key = child.id
        localStorage.removeItem(key)
        // console.log(localStorage);
    })
    child.appendChild(newButton)
}

const addUpdateOption = child => {
    const newButton = document.createElement('input')
    newButton.setAttribute('type', 'submit')
    newButton.setAttribute('value', 'Update Note')

    newButton.addEventListener('click', event => {
        event.preventDefault();
        const par = child.querySelector('div')
        if (par.style.display != 'none') {
            par.style.display = 'none'
        } else {
            par.style.display = 'block'
        }
        // console.log(par);
    })

    child.appendChild(newButton)

}

const addEditArea = child => {

    const editNoteDiv = document.createElement('div');
    editNoteDiv.setAttribute('class', 'updateDiv')
    editNoteDiv.style.display = 'none'

    const editNoteTextArea = document.createElement('textarea')
    editNoteTextArea.setAttribute('class', 'editNoteTextArea')
    editNoteTextArea.setAttribute('cols', 50)
    editNoteTextArea.setAttribute('rows', 10)
    editNoteTextArea.value = child.querySelector('p').textContent
    editNoteDiv.appendChild(editNoteTextArea)

    const updateButton = document.createElement('input')
    updateButton.setAttribute('type', 'submit')
    updateButton.setAttribute('value', 'Save changes')
    editNoteDiv.appendChild(updateButton)

    updateButton.addEventListener('click', event => {
        event.preventDefault();
        const newNoteText = editNoteTextArea.value;
        // child.firstChild.innerHTML = newNoteText
        const content = child.querySelector('.noteTextContent')
        content.innerHTML = newNoteText

        // child.lastUpdate = new Date(Date.now())
        // const lastUpdateDiv = child.getElementByClass(' lastUpdateDiv')
        // console.log(lastUpdateDiv);

        editNoteDiv.style.display = 'none'
    })

    child.appendChild(editNoteDiv)
}

const addDatesDiv = child => {
    const creationDiv = document.createElement('div')
    creationDiv.setAttribute('class', 'creationDiv')
    creationDiv.innerHTML = "Creation date: "+child.firstUpdate
    child.appendChild(creationDiv)
    const updateDiv = document.createElement('div')
    updateDiv.setAttribute('class', 'lastUpdateDiv')
    updateDiv.innerHTML = "Last update: "+child.firstUpdate
    child.appendChild(updateDiv)
}

const generateNotes = (element) => {

    element.innerHTML = ""
    for (const key in localStorage) {
        // Skip built-in properties like length, setItem, etc.
        if (localStorage.hasOwnProperty(key)) {
            let currentNote = localStorage.getItem(key);
            createNoteDiv(element, key, currentNote)
        }
    }
    for (const child of element.children) {
        child['firstUpdate'] = new Date(parseInt(child.id))
        child['lastUpdate'] = new Date(parseInt(child.id))
        
        // addDatesDiv(child);
        addDeleteButton(child);
        addUpdateOption(child);
        addEditArea(child);
    }
}

export { generateNotes };
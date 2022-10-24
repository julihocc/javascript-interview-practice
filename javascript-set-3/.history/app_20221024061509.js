const newNote = document.getElementById("newNote")
const inputArea = document.getElementById("inputArea")
const submitNewNote = document.getElementById("submitNewNote")
const listOfNotes = document.getElementById("listOfNotes")
const clearStorage = document.getElementById("clearStorage")

const generateNotes = () => {
    for (const key in localStorage) {
        // Skip built-in properties like length, setItem, etc.
        if (localStorage.hasOwnProperty(key)) {
          console.log(`${key}: ${localStorage.getItem(key)}`)
        }
      }
      Finally, the last way is to use the Object.keys() method to collect all "own" keys of localStorage and then loop over them by using the for...of loop:
      
      const keys = Object.keys(localStorage)
      for (let key of keys) {
        console.log(`${key}: ${localStorage.getItem(key)}`)
      }
      Read this article to learn more about HTML web storage API and how to use localStorage and sessionStorage objects to store information in the user's browser.
      
      ✌️ Like this article? Follow me on Twitter and LinkedIn. You can also subscribe to RSS Feed.
      
      #JavaScript
      You might also like...
      How to remove the first character from a string in JavaScript
      How to get the first N characters of a string in JavaScript
      How to get the first character of a string in JavaScript
      How to check if a string is empty in JavaScript
      How to use String replaceAll() method in JavaScript
      Share it ⟶
      Popular Articles
      How to detect browser or tab closing in JavaScript
      How to delay or sleep a JavaScript function
      How to format a date to a string in JavaScript
      How to loop through an array of objects in JavaScript
      How to get current time zone in JavaScript
      How to download a file in JavaScript
      How to add days to a date in JavaScript
      How to check if an array contains a value in JavaScript
      How to make HTTP requests in Node.js
      Ezoicreport this ad
      ✨ Learn to build modern web applications using JavaScript and Spring Boot
      I started this blog as a place to share everything I have learned in the last decade. I write about modern JavaScript, Node.js, Spring Boot, core Java, RESTful APIs, and all things web development.
      
      The newsletter is sent every week and includes early access to clear, concise, and easy-to-follow tutorials, and other stuff I think you'd enjoy! No spam ever, unsubscribe at any time.
      
      Your Email Address
      Maker. Developer. Writer.
      
      © 2022 Made with ❤️ by Atta
      
      Products
      DomBuck
      StartupBase
      AcquireBase
      Protips
      Links
      Articles
      Topics
      Sponsors
      Contact
      Follow Me
      Twitter
      LinkedIn
      GitHub
      RSS Feed
      Others
      Advertise
      Privacy Policy
      Cookies
      Disclaimer
      
}

submitNewNote.addEventListener("click", event => {
    event.preventDefault();
    const noteText = inputArea.value
    console.log('noteText:', noteText)
    const id = Date.now()
    console.log(id);
    if (inputArea.value) {
        localStorage.setItem(id, noteText)
    }
    generateNotes();
    console.log('listOfNotes.innerHTML:', listOfNotes.innerHTML)
})

clearStorage.addEventListener("click", event => {
    event.preventDefault;
    localStorage.clear();
    console.log(localStorage);
})

console.log('localStorage:', localStorage)

// localStorage.clear();

// console.log("lS after...", localStorage);
const select = document.getElementById('select');
const header = document.getElementById('header');

select.addEventListener('change', function handleChange(event) {
    console.log(event.target.value); // 👉️ get selected VALUE
    
  // 👇️ get selected VALUE even outside event handler
//   let pos = select.options[select.selectedIndex].value;
//   console.log(pos);

 
//   
});
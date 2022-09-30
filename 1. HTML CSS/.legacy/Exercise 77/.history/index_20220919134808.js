const select = document.getElementById('select');
const header = document.getElementById('header')

select.addEventListener('change', function handleChange(event) {
  console.log(event.target.value); // 👉️ get selected VALUE

  // 👇️ get selected VALUE even outside event handler
  const 
  console.log();

  // 👇️ get selected TEXT in or outside event handler
  console.log(select.options[select.selectedIndex].text);

//   
    if 
});
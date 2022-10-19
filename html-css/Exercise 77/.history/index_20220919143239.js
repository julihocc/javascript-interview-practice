const select = document.getElementById('select');
let header = document.getElementById('header');

select.addEventListener('change', function handleChange(event) {
    // console.log(event.target.value); // 👉️ get selected VALUE
    let pos = event.target.value;
    console.log(pos)
  // 👇️ get selected VALUE even outside event handler
//   let pos = select.options[select.selectedIndex].value;
//   console.log(pos);

    if (pos==="left") {
    header.style.justifyContent = "flex-start";
    console.log(header.style.getPropertyValue("--reorientation"))
    header.style.setProperty("--reorentation", "column")
    console.log(header.style.getPropertyValue("--reorientation"))
    }
    if (pos==="top") {
        header.style.justifyContent = "center";
    }
    if (pos==="right") {
        header.style.justifyContent = "flex-end";
    }
//   
});
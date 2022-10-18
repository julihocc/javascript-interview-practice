
const el = document.querySelector("div")

pars = ['id', 'class', 'style', 'val']


const 

if (el.hasAttributes()) {
    for (const attr of el.attributes) {        
        if (pars.includes(attr.name)) {
            console.log(`Attribute name: ${attr.name} -> value: ${attr.value}`)
        }
    }
}

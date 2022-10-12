
const el = document.querySelector("div")

pars = ['id', 'class', 'style', 'val']

if (el.hasAttributes()) {
    for (const attr of el.attributes) {        
        if (pars.includes(attr.name)) {
            console.log(`Attrib`)
        }
    }
}


const el = document.querySelector("div")

pars = ['id', 'class', 'style', 'val']

const elHasAttr = el.hasAttributes()

if (elHasAttr) {
    for (const attr of el.attributes) {
        let attrName = attr.name;      
        if (pars.includes(attrName)) {
            console.log(attrName, attr.value)
        }
    }
}


const el = document.querySelector("div")

pars = ['id', 'class', 'style', 'val']
"id" in pars


const elHasAttr = el.hasAttributes()

if (elHasAttr) {
    for (const attr of el.attributes) {
        let attrName = attr.name;      
        if (attrName in pars) {
        }
    }
}

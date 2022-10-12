
const el = document.querySelector("div")
console.log("🚀 ~ file: app.js ~ line 4 ~ el", el)
console.log("🚀 ~ file: app.js ~ line 4 ~ el.attributes", el.attributes)

pars = ['id', 'class', 'style', 'val']



const elHasAttr = el.hasAttributes()

if (elHasAttr) {
    for (const attr of el.attributes) {
        let attrName = attr.name;      
        if (attrName in pars) {
        }
    }
}

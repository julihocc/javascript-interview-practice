
const el = document.querySelector("div")
console.log("🚀 ~ file: app.js ~ line 4 ~ el", el)
console.log("🚀 ~ file: app.js ~ line 4 ~ el.attributes", el.attributes)

pars = ['id', 'class', 'style', 'val']

const elHasAttr = el.hasAttributes()
console.log("🚀 ~ file: app.js ~ line 10 ~ elHasAttr", elHasAttr)

if (elHasAttr) {
    for (const attr of el.attributes) {
        let attrName = attr.name;        
        console.log("🚀 ~ file: app.js ~ line 15 ~ attr", attrName)
        if (attr.name in pars) {
            console.log(attr.value);            
        }
    }
}


const el = document.querySelector("div")
console.log("🚀 ~ file: app.js ~ line 4 ~ el", el)
console.log("🚀 ~ file: app.js ~ line 4 ~ el.attributes", el.attributes)

pars = ['id', 'class', 'style', 'val']

elHas

if () {
    for (const attr of el.attributes) {
        if (attr.name in pars) {
            console.log(attr.value);            
        }
    }
}

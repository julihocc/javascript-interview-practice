
const el = document.querySelector("div")

pars = ['id', 'class', 'style', 'val']
console.log('pars:', pars)
console.log('pars.values:', pars.values())

for (let par of pars.values()){
    console.log('par:', par)
}

console.log('"id" in pars:', "id" in pars.values)


const elHasAttr = el.hasAttributes()

if (elHasAttr) {
    for (const attr of el.attributes) {
        let attrName = attr.name;      
        if (attrName of pars.values) {
        }
    }
}

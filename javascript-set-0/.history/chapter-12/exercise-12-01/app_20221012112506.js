
const el = document.querySelector("div")

pars = ['id', 'class', 'style', 'val']
console.log('pars:', pars)

for (let par in pars){
    console.log('par:', par)
}

console.log('"id" in pars:', "id" in pars.values)


const elHasAttr = el.hasAttributes()

if (elHasAttr) {
    for (const attr of el.attributes) {
        let attrName = attr.name;      
        if (attrName in pars) {
        }
    }
}

function systemsRegister(array) {
    let register = [];

    for (let sys of array) {
        let [system, component, subComponent] = sys.split(" | ")

        if (!newSystem(system)) {
            let newObj = {
                name: system,
                compName: [{
                    component: component,
                    subComponent: [subComponent],
                }],
            }
            register.push(newObj)            
            register.sort((a, b) => b.compName.length - a.compName.length || a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        } else {
            newComponent(system, component, subComponent)
        }
    }

    function newSystem(systemName) {
        exist = false
        for (let i = 0; i < register.length; i++) {
            if (register[i].name === systemName) {
                exist = true;
            }
        }
        return exist;
    }

    function newComponent(systemName, componentName, subComponentName) {
        let index = register.findIndex(x => x.name === systemName)
        let compIndex = register[index].compName.findIndex(x => x.component === componentName)
        if (compIndex === -1) {
            let newComponents = {
                component: componentName,
                subComponent: [subComponentName],
            }
            register[index].compName.push(newComponents)
            register[index].compName.sort((a, b) => b.subComponent.length - a.subComponent.length)
        } else {
            register[index].compName[compIndex].subComponent.push(subComponentName)
        }
    }

    for (let system of register) {
        console.log(system.name);
        let index = 0
        for (let component of system.compName) {
            console.log(`|||${component.component}`);
            let print = system.compName[index].subComponent
            for (let sub of print) {
                console.log(`||||||${sub}`);
            }
            index++
        }
    }
}

systemsRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])
console.log(`--------`);
systemsRegister(['Iris | Main System | Radiation Reducer',
'Iris | Main System | Blue Light Reducer',
'Iris | Sub-System Alpha | Resistor Level-5',
'Iris | Core | Memory Reducer',
'Iris | Core | Electricity Reducer',
'Iris | Sub-System Gamma | Resistor Level-2',
'Iris | Sub-System Gamma | Resistor Level-3',
'Iris | Main System | Interface'])

// Iris
// |||Main System
// ||||||Radiation Reducer
// ||||||Blue Light Reducer
// ||||||Interface
// |||Core
// ||||||Memory Reducer
// ||||||Electricity Reducer
// |||Sub-System Gamma
// ||||||Resistor Level-2
// ||||||Resistor Level-3
// |||Sub-System Alpha
// ||||||Resistor Level-5
function solve() {
    // validate input Invalid, Empty or Default
    let inputFields = document.querySelectorAll('.form-control')
    let lectureName = (inputFields[0].querySelector('input'))
    let date = (inputFields[1].querySelector('input'))
    let module = (inputFields[2].querySelector('select'))
    let addButton = inputFields[3].querySelector('button')
    addButton.addEventListener('click', addInfo)
    let trainings = document.querySelector('.modules')


    //<div class="module">    
    //<h3></h3>
    //<ul>
    //      <li class="flex">
    //          <h4>lecture name - 2020/09/28 - 18:00</h4>
    //          <button class='red> Del </button>
    //      </li>
    //</ul>
    //</div>
    let activeModule = []
    function addInfo(e) {
        e.preventDefault()
        if (date.value === '' || lectureName.value === '' || module.value === 'Select module') {
            return
        }
        //conver date
        let h3Info = module.value.toUpperCase()
        let [day, hour] = date.value.split('T')
        
        day = day.split('-').join('/')
        //search for module
        let allModules = document.querySelectorAll('.module h3')
        //let activeModule = []

        for (let el of allModules) {
            if (!activeModule.includes(el.textContent)) {
                activeModule.push(el.textContent)
            }

        }
        console.log(activeModule);

        let labelInfo = `${module.value.toUpperCase()}-MODULE`
        if (activeModule.includes(labelInfo)) {
            let findH3Tag = Array.from(allModules).find(node => node.textContent === labelInfo)
            let parrent = findH3Tag.parentNode
            let findUlTag = parrent.querySelector('ul')

            let liTag = document.createElement('li')
            liTag.setAttribute('class', 'flex')
            let h4Tag = document.createElement('h4')
            h4Tag.textContent = `${lectureName.value} - ${day} - ${hour}`
            let buttonTag = document.createElement("button")
            buttonTag.setAttribute('class', 'red')
            buttonTag.textContent = 'Del'
            buttonTag.addEventListener('click', deleteElement)
            liTag.appendChild(h4Tag)
            liTag.appendChild(buttonTag)
            findUlTag.appendChild(liTag)
            //незнам как да сортирам Li елементи по друг начин засега ги трия и създавам нови :)
            let allForSort = parrent.querySelectorAll('ul li')
            let sortedArray = []
            for (let el of allForSort) {
                let test = el.textContent.slice(0,-3)
                
                sortedArray.push(test)
            }
            sortedArray = sortedArray.sort((a, b) => a.localeCompare(b))

            for (let el of allForSort) {
                el.remove()
            }

            for (let newInfo of sortedArray) {
                let liTag = document.createElement('li')
                liTag.setAttribute('class', 'flex')
                let h4Tag = document.createElement('h4')
                h4Tag.textContent = newInfo
                let buttonTag = document.createElement("button")
                buttonTag.setAttribute('class', 'red')
                buttonTag.textContent = 'Del'
                buttonTag.addEventListener('click', deleteElement)
                liTag.appendChild(h4Tag)
                liTag.appendChild(buttonTag)
                findUlTag.appendChild(liTag)
            }

        } else {
            // create all tags and append
            let divTag = document.createElement('div')
            divTag.setAttribute('class', 'module')
            let h3Tag = document.createElement('h3')
            h3Tag.textContent = `${h3Info}-MODULE`
            divTag.appendChild(h3Tag)

            let ulTag = document.createElement('ul')
            let liTag = document.createElement('li')
            liTag.setAttribute('class', 'flex')
            let h4Tag = document.createElement('h4')
            h4Tag.textContent = `${lectureName.value} - ${day} - ${hour}`
            let buttonTag = document.createElement("button")
            buttonTag.setAttribute('class', 'red')
            buttonTag.textContent = 'Del'
            buttonTag.addEventListener('click', deleteElement)
            liTag.appendChild(h4Tag)
            liTag.appendChild(buttonTag)
            ulTag.appendChild(liTag)
            divTag.appendChild(ulTag)
            trainings.appendChild(divTag)
        }

        function deleteElement(e) {
            console.log(e.target.parentNode);
            let liDel = e.target.parentNode
            let div = e.target.parentNode.parentNode.parentNode

            liDel.remove()

            let isEmpty = div.querySelectorAll('li')
            if (isEmpty.length === 0) {
                let moduleName = div.querySelector('h3').textContent;
                let index = activeModule.indexOf(moduleName)
                if (index > -1) {
                    activeModule.splice(index, 1)
                }
                div.remove()

            }

        }

    }

};
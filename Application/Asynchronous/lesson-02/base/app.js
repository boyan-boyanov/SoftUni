window.addEventListener('load', async () => {
    const main = document.querySelector('main')
    main.addEventListener('click', loadInfo)
    request(main)
})

async function loadInfo(e) {
    console.log(e.target);
    let currentTarget = ""
    let currentId = ""
    if (e.target.tagName == 'DIV') {
        currentId = e.target.parentElement.id;
        currentTarget = e.target.parentElement;
    } else if (e.target.tagName == 'MAIN' || e.target.tagName == 'H2') {
        currentId = ""
    }
    else if (e.target.tagName !== 'ARTICLE') {
        currentId = e.target.parentElement.parentElement.id;
        currentTarget = e.target.parentElement.parentElement;

    } else if (e.target.tagName == "ARTICLE") {
        currentId = e.target.id
        currentTarget = e.target

    }
    if (currentId != "") {
        try {
            const request = await fetch('http://localhost:3030/data/recipes/' + `${currentId}`)
            if (request.ok != true) {
                const err = await request.json()
                throw new Error(err.message)
            }
            const data = await request.json()
            openRecipe(data, currentTarget)
        } catch (error) {
            alert(error)
        }
    }
}

async function request(main) {

    try {
        const response = await fetch("http://localhost:3030/data/recipes")
        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`)
        }
        const data = await response.json();
        main.replaceChildren()

        for (let recipe of Object.entries(data)) {
            console.log(recipe);
            let articleEl = createEl('article', ['class', 'preview', 'ownerid', `${recipe[1]._ownerId}`, "id", `${recipe[1]._id}`], '')
            let divEl = document.createElement('div')
            divEl.setAttribute('class', 'title')
            let h2El = document.createElement('h2')
            h2El.textContent = recipe[1].name
            divEl.appendChild(h2El)
            articleEl.appendChild(divEl)

            let divImg = createEl('div', ['class', 'small'], '')
            let imgEl = createEl('img', ['src', `${recipe[1].img}`], '')
            divImg.appendChild(imgEl)
            articleEl.appendChild(divImg)

            main.appendChild(articleEl)
        }

    } catch (error) {
        console.log(error);
    }
}

function createEl(type, atrr, content) {
    let result = document.createElement(type)
    if (atrr !== "") {
        for (let i = 0; i < atrr.length; i += 2) {
            result.setAttribute(atrr[i], atrr[i + 1])
        }
    }
    if (content !== '') {
        result.textContent = content
    }
    return result
}
let opened = {}

function openRecipe(data, currentTarget) {
    const copy = currentTarget.cloneNode(true)
    console.log(currentTarget);

    if (currentTarget.getAttribute("data") == "opened") {
        console.log(opened);
        currentTarget.parentElement.insertBefore(opened[data._id], currentTarget)
        currentTarget.remove()
    }
    currentTarget.setAttribute('data', "opened")

    const article = document.createElement("article");
    article.setAttribute("id", `${data._id}`)
    const h2Title = createEl("h2", "", `${data.name}`)
    article.appendChild(h2Title)
    const divBand = createEl('div', ["class", "band"], "");
    const divThumb = createEl("div", ["class", "thumb"], "");
    const img = createEl('img', ["src", `${data.img}`], "");
    divThumb.appendChild(img);
    divBand.appendChild(divThumb);
    const divInt = createEl('div', ["class", "ingredients"], "")
    const h3Element = createEl("h3", "", "Ingredients:")
    divInt.appendChild(h3Element);
    const ulEl = document.createElement('ul')
    for (let li of data.ingredients) {
        const liElement = createEl('li', "", `${li}`)
        ulEl.appendChild(liElement)
    };
    divInt.appendChild(ulEl);
    divBand.appendChild(divInt);
    article.appendChild(divBand);
    const divInfo = createEl("div", ["class", "description"], "")
    const h3Prepar = createEl('h3', "", "Preparation:");
    divInfo.appendChild(h3Prepar);
    for (let p of data.steps) {
        const pElement = createEl("p", "", `${p}`)
        divInfo.appendChild(pElement)
    }
    article.appendChild(divInfo)

    opened[data._id] = copy
    currentTarget.replaceChildren()
    currentTarget.appendChild(h2Title)
    currentTarget.appendChild(divBand)
    currentTarget.appendChild(divInfo)


}




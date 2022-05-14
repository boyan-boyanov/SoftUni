async function solution() {
    let mainElement = document.getElementById('main')

    const request = await fetch("http://localhost:3030/jsonstore/advanced/articles/list")
    const data = await request.json()

    for (let el of data) {
        const divAccord = createEl('div', ['class', 'accordion'], '')
        const divHead = createEl('div', ['class', 'head'], '')
        const spanTitle = createEl('div', '', `${el.title}`)
        const button = createEl('button', ['class', 'button', 'id', `${el._id}`], 'More')
        button.addEventListener('click', showMore)
        divHead.appendChild(spanTitle)
        divHead.appendChild(button)
        divAccord.appendChild(divHead)
        const divExtra = createEl('div', ['class', 'extra'], '')
        const pElement = createEl('p', ['id', 'extra'], 'Loading...')
        divExtra.appendChild(pElement)
        divAccord.appendChild(divExtra)
        mainElement.appendChild(divAccord)
    }
}
async function showMore(e) {
    let button = e.target
    let id = button.getAttribute('id')
    let extraField = button.parentElement.nextElementSibling
    if (button.textContent === 'More') {
        button.textContent = "Less"
        extraField.style.display = 'block'
    } else {
        button.textContent = "More"
        extraField.style.display = 'none'
    }
    // don`t repeat same GET request
    if (extraField.children[0].textContent == 'Loading...') {
        const request = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
        const data = await request.json()
        extraField.children[0].textContent = data.content
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

solution()
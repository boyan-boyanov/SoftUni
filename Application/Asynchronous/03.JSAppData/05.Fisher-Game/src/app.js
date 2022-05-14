let userInfo = ""
window.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout').addEventListener('click', logout)
    const homeLink = document.getElementById('home')
    const logoutLink = document.getElementById('logout')
    const loginLink = document.getElementById('login')
    const welcome = document.querySelector('.email span')
    const registerLink = document.getElementById('register')
    const addBtn = document.querySelector('#addForm .add')
    addBtn.addEventListener('click', createNewCatch)
    const loadBtn = document.querySelector('.load').addEventListener('click', loadInfo)

    let currentSession = JSON.parse(sessionStorage.getItem('userData'))
    userInfo = currentSession
    if (sessionStorage.userData !== undefined) {
        homeLink.style = "display: none"
        logoutLink.style = "display: inline-block"
        loginLink.style = "display: none"
        registerLink.style = "display: none"
        addBtn.disabled = false
        welcome.textContent = `${currentSession.email}`
    } else {
        homeLink.style = "display: none"
        logoutLink.style = "display: none"
        loginLink.style = "display: inline-block"
        registerLink.style = "display: inline-block"
        welcome.textContent = 'guest'
    }

})

const catchesFields = document.getElementById('catches')
catchesFields.addEventListener('click', updateDelete)

async function updateDelete(e) {
    if (e.target.className == 'update') {
        let catchId = e.target.dataset.id
        let captureTime = e.target.previousElementSibling
        let bait = captureTime.previousElementSibling.previousElementSibling
        let location = bait.previousElementSibling.previousElementSibling
        let species = location.previousElementSibling.previousElementSibling
        let weight = species.previousElementSibling.previousElementSibling
        let angler = weight.previousElementSibling.previousElementSibling
        console.log(captureTime.value);
        console.log(angler.value);

        let option = {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                'X-Authorization': userInfo.accessToken
            },
            body: JSON.stringify({
                angler: angler.value,
                weight: weight.value,
                species: species.value,
                location: location.value,
                bait: bait.value,
                captureTime: captureTime.value
            })
        }

        try {
            const request = await fetch(`http://localhost:3030/data/catches/${catchId}`, option)
            if (request.ok != true) {
                const err = await request.json()
                throw new Error(`${err.message}`)
            }
            const data = await request.json()
            loadInfo()
        } catch (error) {
            alert(error)
        }


        console.log(userInfo.accessToken)
    }
    if (e.target.className == 'delete') {
        let catchId = e.target.dataset.id
        let option = {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                'X-Authorization': userInfo.accessToken
            },
        }

        try {
            const request = await fetch(`http://localhost:3030/data/catches/${catchId}`, option)
            if (request.ok != true) {
                const err = await request.json()
                throw new Error(`${err.message}`)
            }
            const data = await request.json()
            loadInfo()
        } catch (error) {
            alert(error)
        }
    }

}

async function loadInfo(e) {
    try {
        const request = await fetch('http://localhost:3030/data/catches')
        if (request.ok != true) {
            const err = await request.json()
            throw new Error(`${err.message}`)
        }
        const data = await request.json()
        catchesFields.replaceChildren()
        data.map(loadFishes)

    } catch (error) {
        alert(error)
    }
}

function loadFishes(item) {
    let disbledValue = ''
    let currentSession = JSON.parse(sessionStorage.getItem('userData'))
    if (sessionStorage.userData !== undefined && currentSession._id == item._ownerId) {
        disbledValue = ''
    } else {
        disbledValue = 'disabled = true'
    }

    const divElement = document.createElement('div')
    divElement.className = 'catch'
    divElement.innerHTML = `<label>Angler</label>
<input type="text" class="angler" value="${item.angler}" ${disbledValue}>
<label>Weight</label>
<input type="text" class="weight" value="${item.weight}" ${disbledValue}>
<label>Species</label>
<input type="text" class="species" value="${item.species}" ${disbledValue}>
<label>Location</label>
<input type="text" class="location" value="${item.location}" ${disbledValue}>
<label>Bait</label>
<input type="text" class="bait" value="${item.bait}" ${disbledValue}>
<label>Capture Time</label>
<input type="number" class="captureTime" value="${item.captureTime}" ${disbledValue}>
<button class="update" data-id="${item._id}" ${disbledValue}>Update</button>
<button class="delete" data-id="${item._id}" ${disbledValue}>Delete</button>`

    catchesFields.appendChild(divElement)
}

async function createNewCatch(e) {
    e.preventDefault()
    const formData = new FormData(e.target.form)
    let body = {}
    const test = [...formData].forEach(x => {
        Object.assign(body, { [x[0]]: x[1] }, {})
    })
    let option = {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            'X-Authorization': userInfo.accessToken
        },
        body: JSON.stringify(body),

    }
    const request = await fetch('http://localhost:3030/data/catches', option)
    const data = await request.json()
    loadInfo()
    document.getElementById('addForm').reset()
    
}

function logout(e) {
    sessionStorage.clear()
    window.location = '/src/login.html'
}
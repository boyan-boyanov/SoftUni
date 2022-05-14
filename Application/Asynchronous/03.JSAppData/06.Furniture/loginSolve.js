window.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.userData == undefined) {
        window.location = '/home.html'
    }
    const allOrdersBtn = document.getElementById('allOrders').addEventListener('click', allOrders)
    const createForm = document.getElementById('submit')
    createForm.addEventListener('submit', createArticle)
    const logoutBtn = document.getElementById('logoutBtn')
    logoutBtn.addEventListener('click', logout)
    const testItems = document.getElementById('test').addEventListener('click', addTestItems)
    const buyBtn = document.getElementById('buy').addEventListener('click', buyItems)
    loadData()
})

const userInfo = JSON.parse(sessionStorage.getItem('userData'))
const spanItems = document.getElementById('allItems')
spanItems.textContent = ""
const spanTotal = document.getElementById('allPrice')
spanTotal.textContent = ""

async function allOrders() {
    const request = await fetch('http://localhost:3030/data/orders')
    const data = await request.json()
    const items = data.filter(x => x.userid == userInfo._id)
    let allItems = []
    let total = 0

    for (let item of items) {
        total += Number(item.price)
        allItems.push(item.name)
    }
    spanItems.textContent = allItems.join(", ")
    spanTotal.textContent = total + " $"
}

async function buyItems(e) {
    e.preventDefault()
    const allFields = e.target.parentElement.querySelectorAll("tbody input")
    for (let el of allFields) {
        if (el.checked) {
            const userInfo = (JSON.parse(sessionStorage.getItem('userData')))
            const userid = userInfo._id
            const trElement = el.parentElement.parentElement
            const childrens = trElement.childNodes;
            const option = {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    'X-Authorization': userInfo.accessToken
                },
                body: JSON.stringify({
                    name: childrens[1].textContent,
                    price: childrens[2].textContent,
                    decFactor: childrens[1].textContent,
                    userid,
                    _ownerId: trElement.getAttribute('ownerid')
                })
            }
            try {
                const request = await fetch('http://localhost:3030/data/orders', option)
                if (request.ok != true) {
                    const err = await request.json()
                    throw new Error(err.message)
                }
                const data = await request.json()
            } catch (error) {
                alert(error)
            }

        }
    }
}

async function createArticle(e) {
    e.preventDefault()
    let productInfo = new FormData(e.target)
    let img = productInfo.get('img').trim()
    let name = productInfo.get('name').trim()
    let price = productInfo.get('price').trim()
    let decFactor = productInfo.get('factor').trim()
    try {
        if (img == "" || name == "" || price == "" || decFactor == "") {
            throw new Error('All fields are require!!!')
        }
        let product = {
            img, name, price, decFactor
        }
        const option = {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                'X-Authorization': userInfo.accessToken
            },
            body: JSON.stringify({ img, name, price, decFactor })
        }
        const request = await fetch('http://localhost:3030/data/furniture', option)
        const data = await request.json()
        console.log(data);
    } catch (error) {
        alert(error)
    }
}

async function loadData() {
    const request = await fetch("http://localhost:3030/data/furniture")
    const data = await request.json()
    const tBody = document.querySelector('tbody')
    tBody.replaceChildren()
    data.map(x => {
        const trElement = createEl('tr', ["ownerId", `${x._ownerId}`, "id", `${x._id}`], "");
        const tdImg = document.createElement('td')
        const imgElement = createEl("img", ["src", `${x.img}`], "")
        tdImg.appendChild(imgElement)
        const tdName = document.createElement('td')
        const pName = createEl("p", "", `${x.name}`)
        tdName.appendChild(pName)
        const tdPrice = document.createElement('td')
        const pPrice = createEl("p", "", `${x.price}`)
        tdPrice.appendChild(pPrice)
        const tdFactor = document.createElement('td')
        const pFactor = createEl("p", "", `${x.decFactor}`)
        tdFactor.appendChild(pFactor)
        trElement.appendChild(tdImg)
        trElement.appendChild(tdName)
        trElement.appendChild(tdPrice)
        trElement.appendChild(tdFactor)
        const tdCheck = document.createElement('td')
        const inputCheck = createEl('input', ["type", "checkbox"], "")
        tdCheck.appendChild(inputCheck)
        trElement.appendChild(tdCheck)
        tBody.appendChild(trElement)
    })
}

async function addTestItems(e) {
    e.preventDefault()

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'X-Authorization': userInfo.accessToken
        },
        body: JSON.stringify({
            img: "https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG",
            name: "Sofa2",
            price: "259",
            decFactor: "1.2"
        })
    }
    try {
        const request = await fetch('http://localhost:3030/data/furniture', option)
        if (request.ok != true) {
            const err = await request.json()
            throw new Error(err.message)
        }
        console.log(request);
        const data = await request.json()
    } catch (error) {
        alert(error)
    }


    const option2 = {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            'X-Authorization': userInfo.accessToken
        },
        body: JSON.stringify({
            img: "https://www.stylespafurniture.com/wp-content/uploads/2020/03/Cove_3_Door_Wardrobe_1.jpg",
            name: "Office chair",
            price: "160",
            decFactor: "0.5"
        })
    }
    const request2 = await fetch('http://localhost:3030/data/furniture', option2)
    const data2 = await request2.json()
}

function logout() {
    sessionStorage.clear()
    window.location = '/home.html'
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
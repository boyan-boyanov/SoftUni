const url = 'http://localhost:3030/jsonstore/phonebook'
const phonebook = document.getElementById('phonebook')
phonebook.addEventListener('click', deleteContact)
 
async function createContact(e) {
    const person = document.getElementById('person').value
    const phone = document.getElementById('phone').value
    option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ person, phone })
    }
    const request = await fetch(url, option)
    loadContacts()
}
 
async function deleteContact(e) {
    if (e.target.className === "del") {
        let contactInfo = e.target.parentElement
        const elementId = contactInfo.id
 
        const request = await fetch(`${url}/${elementId}`, { method: 'delete' })
        const data = await request.json()
        contactInfo.remove()
    }
}
 
function attachEvents() {
    const loadBtn = document.getElementById('btnLoad')
    loadBtn.addEventListener('click', loadContacts)
    const createBtn = document.getElementById('btnCreate')
    createBtn.addEventListener('click', createContact)
}
 
async function loadContacts() {
    const request = await fetch(url)
    const data = await request.json()
    phonebook.replaceChildren()
 
    Object.values(data).forEach(x => {
        let liElement = document.createElement('li')
        liElement.textContent = `${x.person}: ${x.phone}`
        liElement.setAttribute('id', `${x._id}`)
        let deleteButton = document.createElement('button')
        deleteButton.textContent = "DELETE"
        deleteButton.setAttribute('class', 'del')
        liElement.appendChild(deleteButton)
        phonebook.appendChild(liElement)
    })
}
 
attachEvents();
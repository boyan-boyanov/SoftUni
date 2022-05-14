const loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', loadAllBooks)
const tbodyElement = document.querySelector('tbody')
tbodyElement.addEventListener('click', editBook)
tbodyElement.addEventListener('click', editBook)
const createForm = document.getElementById('create')
createForm.addEventListener('submit', createBook)
const url = 'http://localhost:3030/jsonstore/collections/books'
const editForm = document.getElementById('edit')
editForm.addEventListener('submit', saveBook)
const titleEdit = document.getElementById('title')
const authorEdit = document.getElementById('author')
let editId = ""

async function deleteBook() {

    const request = await fetch(`${url}/${editId}`, { method: 'delete' })
    const data = await request.json()
}

async function createBook(e) {
    e.preventDefault()
    let formData = new FormData(createForm)
    let allData = [...formData.entries()]
    console.log(allData);
    const title = allData[0][1].trim()
    const author = allData[1][1].trim()


    if (title !== "" && author !== "") {
        const option = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author })
        }
        const request = await fetch(url, option)
        const data = await request.json()
        console.log(data);
        createForm.reset();
        loadAllBooks()
    }
}

async function saveBook(e) {

    e.preventDefault()
    let formData = new FormData(editForm)
    let allData = [...formData.entries()]
    const title = allData[0][1].trim()
    const author = allData[1][1].trim()

    if (title !== "" && author !== "") {
        const option = {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author })
        }

        const request = await fetch(`${url}/${editId}`, option)
        const data = await request.json()
        createForm.reset();
        loadAllBooks()
        editForm.style = "display: none"
        createForm.style = "display: block"
    }

}

function editBook(e) {

    if (e.target.id === 'edit') {
        const trElement = e.target.parentElement.parentElement
        editId = trElement.id
        authorEdit.value = e.target.parentElement.previousSibling.textContent
        titleEdit.value = e.target.parentElement.previousSibling.previousSibling.textContent
        editForm.style = "display: block"
        createForm.style = "display: none"
    } else if (e.target.id === 'del') {
        const trElement = e.target.parentElement.parentElement
        editId = trElement.id
        deleteBook()
        trElement.remove()
    }
}

async function loadAllBooks() {
    const request = await fetch(url);
    const data = await request.json();
    tbodyElement.replaceChildren()

    Object.entries(data).forEach(x => {
        const trElement = document.createElement('tr');
        trElement.setAttribute('id', x[0]);
        const tdBook = document.createElement('td');
        tdBook.textContent = x[1].title;
        const tdAuthor = document.createElement('td');
        tdAuthor.textContent = x[1].author;
        trElement.appendChild(tdBook);
        trElement.appendChild(tdAuthor);
        const tdButton = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.setAttribute('id', 'edit')
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('id', 'del');
        tdButton.appendChild(editBtn);
        tdButton.appendChild(deleteBtn);
        trElement.appendChild(tdButton);
        tbodyElement.appendChild(trElement);
    })

}

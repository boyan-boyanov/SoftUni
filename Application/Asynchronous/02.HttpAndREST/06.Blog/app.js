function attachEvents() {

    let selectField = document.getElementById('posts')
    const buttonLoad = document.getElementById('btnLoadPosts')
    buttonLoad.addEventListener('click', loadPosts)
    const buttonView = document.getElementById('btnViewPost')
    buttonView.addEventListener('click', viewComments)
    const postTitle = document.getElementById('post-body')

    async function viewComments(e) {
        let value = e.target.previousElementSibling.value;
        let url = `http://localhost:3030/jsonstore/blog/comments/`
        const request = await fetch(url)
        const data = await request.json()
        postTitle.replaceChildren()
        for (let el of Object.entries(data)) {
            if (value === el[1].postId) {
                let liElement = document.createElement('li')
                liElement.textContent = el[1].text
                liElement.setAttribute('id', el[1].id)
                postTitle.appendChild(liElement)
            }
        }
    }

    async function loadPosts() {
        const request = await fetch('http://localhost:3030/jsonstore/blog/posts')
        const data = await request.json()
        Object.entries(data).forEach(b => {
            createElement(b[0], b[1].title)
        })
    }

    function createElement(value, title) {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', value);
        optionElement.textContent = title;
        selectField.appendChild(optionElement)
    }
}

attachEvents();
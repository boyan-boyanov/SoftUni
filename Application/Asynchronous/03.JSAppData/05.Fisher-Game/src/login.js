window.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout').addEventListener('click', logout)
    const formInfo = document.getElementById('loginForm')
    formInfo.addEventListener('submit', onLogin)

    const homeLink = document.getElementById('home')
    const logoutLink = document.getElementById('logout')
    const registerLink = document.getElementById('register')
    const welcome = document.querySelector('.email span')
    const button = document.querySelector('button')

    if (sessionStorage.userData !== undefined) {
        homeLink.style = "display: inline-block"
        logoutLink.style = "display: inline-block"
        registerLink.style = "display: none"
        let data = JSON.parse(sessionStorage.getItem('userData'))
        welcome.textContent = data.username
        button.disabled = true
    } else {
        homeLink.style = "display: none"
        logoutLink.style = "display: none"
        registerLink.style = "display: inline-block"
        let data = JSON.parse(sessionStorage.getItem('userData'))
        welcome.textContent = 'guest'
        button.disabled = false
    }
})
const url = 'http://localhost:3030/users/login'

async function onLogin(e) {
    e.preventDefault()
    const formData = new FormData(e.target)

    const email = formData.get('email').trim()
    const password = formData.get('password').trim()
    const option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    }

    try {
        if (email == "" || password == "") {
            throw new Error('Missing email or password')
        }
        const request = await fetch(url, option)
        if (request.ok != true) {
            const err = await request.json()
            throw new Error(err.message)
        }

        const data = await request.json()
        sessionStorage.setItem('userData', JSON.stringify(data))
        window.location = '/src/index.html'
        console.log(data);
    } catch (error) {
        alert(error)
    }
}

function logout (e){
    sessionStorage.clear()
    window.location = '/src/login.html'
}

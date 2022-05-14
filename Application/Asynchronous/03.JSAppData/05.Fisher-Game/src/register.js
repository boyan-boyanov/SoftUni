window.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout').addEventListener('click', logout)
    const formInfo = document.getElementById('registerForm')
    formInfo.addEventListener('submit', registerUser)

    const homeLink = document.getElementById('home')
    const logoutLink = document.getElementById('logout')
    const loginLink = document.getElementById('login')
    const welcome = document.querySelector('.email span')
    const button = document.querySelector('button')

    if (sessionStorage.userData !== undefined) {
        homeLink.style = "display: inline-block"
        logoutLink.style = "display: inline-block"
        loginLink.style = "display: none"
        let data = JSON.parse(sessionStorage.getItem('userData'))
        welcome.textContent = data.username
        button.disabled = true
    } else {
        homeLink.style = "display: none"
        logoutLink.style = "display: none"
        loginLink.style = "display: inline-block"
        welcome.textContent = 'guest'
        button.disabled = false
    }
})

function logout(e) {
    sessionStorage.clear()
    window.location = '/src/login.html'
}

async function registerUser(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email').trim()
    const password = formData.get('password').trim()
    const rePass = formData.get('rePass').trim()
    const username = email.split("@")[0]
    const option = {
        method: 'post',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ email, password, username })
    }


    try {
        if (password != rePass) {
            throw new Error('Password and confirm password does not match')
        }
        const request = await fetch('http://localhost:3030/users/register', option)
        if (request.ok != true) {
            const err = await request.json()
            throw new Error(err.message)
        }
        const data = await request.json()
        sessionStorage.setItem('userData', JSON.stringify(data))
        window.location = '/src/index.html'
    } catch (error) {
        alert(error)
    }
}
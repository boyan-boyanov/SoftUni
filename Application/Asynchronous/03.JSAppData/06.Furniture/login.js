window.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#register')
    registerForm.addEventListener('submit', registerUser)
    const loginForm = document.getElementById('login')
    loginForm.addEventListener('submit', loginUser)
    if (sessionStorage.userData !== undefined) {
        window.location = '/homeLogged.html'
      }
    })


async function registerUser(e) {
    e.preventDefault()
    let userInfo = new FormData(e.target)
    const email = userInfo.get('email').trim()
    const password = userInfo.get('password')
    const rePass = userInfo.get('rePass')

    try {
        if (password != rePass) {
            throw new Error('Password and confirm password does not match')
        }
        if (email == "" || password.trim() == "" || rePass.trim() == "") {
            throw new Error("all fields are required")
        }
        const option = {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        }
        const request = await fetch('http://localhost:3030/users/register', option)
        if (request.ok != true) {
            const err = await request.json()
            throw new Error(err.message)
        }
        const data = await request.json()
        sessionStorage.setItem("userData", JSON.stringify(data))
        window.location = '/home.html'

    } catch (error) {
        alert(error)
    }

}

async function loginUser(e) {
    e.preventDefault()
    let userInfo = new FormData(e.target)
    const email = userInfo.get('email').trim()
    const password = userInfo.get('password')
    try {
        if (email == "" || password.trim() == "") {
            throw new Error("all fields are required")
        }

        const option = {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        }
        const request = await fetch('http://localhost:3030/users/login', option)
        if (request.ok != true) {
            const err = await request.json()
            throw new Error(err.message)
        }
        const data = await request.json()
        sessionStorage.setItem("userData", JSON.stringify(data))
        console.log(data);
        console.log(sessionStorage);
        window.location = '/home.html'



    } catch (error) {
        alert(error)
    }
}


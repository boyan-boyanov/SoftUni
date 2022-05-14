console.log('test');
window.addEventListener('load', async () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', sendData)

})

async function sendData(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email').trim()
    const password = formData.get('password')
    const rePass = formData.get('rePass')

    try {
        if (email == "" || password == "" || rePass == "") {
            throw new Error("All fields are required")
        }
        if (password != rePass) {
            throw new Error("Password and confirm password does not match")
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
        window.location = '/Application/Asynchronous/lesson-03/base/index.html'

    } catch (error) {
        alert(error)
    }


}
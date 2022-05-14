console.log('test');
window.addEventListener('load', async () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', sendData)
})

async function sendData(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')
    const option = {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    }

    try {
        if (email == "" || password == "") {
            throw new Error("All fields are required")
        }
        const request = await fetch('http://localhost:3030/users/login', option)
        if (request.ok != true) {
            const err = await request.json()
            throw new Error(err.message)
        }
        const data = await request.json()
        sessionStorage.setItem("userData", JSON.stringify(data))
        window.location = '/Application/Asynchronous/lesson-03/base/index.html'
        console.log(data);

    } catch (error) {
        alert(error)
    }
}
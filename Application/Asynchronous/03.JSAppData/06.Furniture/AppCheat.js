/*  FORMS
const formInfo = document.getElementById('loginForm')
formInfo.addEventListener('submit', onLogin)

Primet HTML:     <label>Email: <input type="text" name="email"></label>

    function onLogin(e) {
        e.preventDefault()
        const formData = new FormData(e.target) - взима цялата информация от формата
        const email = formData.get('email') - взима value на input с name='email'
    }
*/
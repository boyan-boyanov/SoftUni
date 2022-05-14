import { login, register } from "../api/data.js";
import { html } from "../lib.js";
//import { notify } from "../notify.js";

//window.notify = notify;

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
    <form id="register" @submit=${onSubmit}>
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>`

export function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
        
        const formData = new FormData(ev.target);
        const email = formData.get('email');
        //const username = formData.get('username');
        const password = formData.get('password');
        const rePass = formData.get('confirm-password');
        //const gender = formData.get('gender');
        
        if (email == '' || password == '' || rePass == '') {
            alert('All fields are required');
            // notify('All fields are required');
            return;
        }

        if (password != rePass) {
            alert('Passwords don\'t match');
            // notify('Passwords don\'t match');
            return;
        }

        await register(password, email);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}
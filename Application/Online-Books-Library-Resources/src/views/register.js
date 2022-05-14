import { login, register } from "../api/data.js";
import { html } from "../lib.js";
//import { notify } from "../notify.js";

//window.notify = notify;

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="register">
    <form id="register-form" action="" method="" @submit=${onSubmit}>
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
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
        const rePass = formData.get('confirm-pass');
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
        ctx.page.redirect('/books');
    }
}
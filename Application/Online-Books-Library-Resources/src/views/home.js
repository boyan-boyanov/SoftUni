import { html } from "../lib.js";
import { getUserData } from "../util.js";

const homeTemplate = () => html`<section id="welcome">
<div id="welcome-container">
    <h1>Welcome To Meme Lounge</h1>
    <img src="/images/welcome-meme.jpg" alt="meme">
    <h2>Login to see our memes right away!</h2>
    <div id="button-div">
        <a href="/login" class="button">Login</a>
        <a href="/register" class="button">Register</a>
    </div>
</div>
</section>`

export function homePage(ctx) {
    if(getUserData() !== null) {
        return ctx.page.redirect('/memes');
    }
    ctx.render(homeTemplate());
}

/*
<section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
            <ul class="other-books-list">
                <li class="otherBooks">
                    <h3>A Court of Thorns and Roses</h3>
                    <p>Type: Fiction</p>
                    <p class="img"><img src="./images/book1.png"></p>
                    <a class="button" href="#">Details</a>
                </li>

                <li class="otherBooks">
                    <h3>Outlander</h3>
                    <p>Type: Other</p>
                    <p class="img"><img src="/images/book2.png"></p>
                    <a class="button" href="#">Details</a>
                </li>

                <li class="otherBooks">
                    <h3>To Kill a Mockingbird</h3>
                    <p>Type: Classic</p>
                    <p class="img"><img src="/images/book3.png"></p>
                    <a class="button" href="#">Details</a>
                </li>
            </ul>
            <!-- Display paragraph: If there are no books in the database -->
            <p class="no-books">No books in database!</p>
        </section>
*/
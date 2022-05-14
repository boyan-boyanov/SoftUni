import { getUsersBooks } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const profileTemplate = (userData, userBooks) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->

    ${userBooks.length != 0 ? html`<ul class="my-books-list">
        ${userBooks.map(bookTemplate)}
    </ul>` : html`<p class="no-books">No books in database!</p>`}
    <!-- Display paragraph: If the user doesn't have his own books  -->
    </section>
`

const bookTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>
`;

export async function userProfilePage(ctx) {
    const userData = getUserData();
    const userBooks = await getUsersBooks(userData.id);
    console.log(userData);
    console.log(userBooks);
    ctx.render(profileTemplate(userData, userBooks));
}
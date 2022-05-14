import { getUsersItems } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const profileTemplate = (userData, userItems) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->

    ${userItems.length != 0 ? html`<ul class="my-books-list">
        ${userItems.map(bookTemplate)}
    </ul>` : html`<p class="no-books">No books in database!</p>`}
    <!-- Display paragraph: If the user doesn't have his own books  -->
    </section>
`

const bookTemplate = (item) => html`
<li class="otherBooks">
    <h3>${item.title}</h3>
    <p>Type: ${item.type}</p>
    <p class="img"><img src=${item.imageUrl}></p>
    <a class="button" href="/details/${item._id}">Details</a>
</li>
`;

export async function userProfilePage(ctx) {
    const userData = getUserData();
    const userItems = await getUsersItems(userData.id);
    console.log(userData);
    console.log(userItems);
    ctx.render(profileTemplate(userData, userItems));
}
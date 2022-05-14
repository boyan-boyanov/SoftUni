import { getUsersItems } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const profileTemplate = (userData, userItems) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${userItems.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) --> 
              ${userItems.length > 0
            ? userItems.map(itemTemplate)
        : html`<p class="no-memes">No memes in database.</p>`}
        <!-- Display : If user doesn't have own memes  --> 
            </div>
</section>
`

const itemTemplate = (item) => html`
<div class="user-meme">
    <p class="user-meme-title">${item.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${item.imageUrl}>
    <a class="button" href="/details/${item._id}">Details</a>
</div>
`;

export async function userProfilePage(ctx) {
    console.log('prof');
    const userData = getUserData();
    const userItems = await getUsersItems(userData.id);
    console.log(userData);
    console.log(userItems);
    ctx.render(profileTemplate(userData, userItems));
}
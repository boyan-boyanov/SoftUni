import { deleteItem, getItemById, getLikesByItemId, getMyLikeByItemId, likeItem } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (data, isCreator, onDelete, viewLike, onClick, likes) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${data.title}</h3>
        <p class="type">Type: ${data.type}</p>
        <p class="img"><img src=${data.imageUrl}></p>
        <div class="actions">
            ${isCreator ? html`<a class="button" href="/edit/${data._id}">Edit</a>
            <a class="button" href="javascript:void(0)" @click=${onDelete}>Delete</a>` : null}

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            ${viewLike   ? html`<a class="button" href="javascript:void(0)" @click=${onClick}>Like</a>`
             : null}
            
            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${data.description}</p>
    </div>
</section>
`;



export async function detailsPage(ctx) {
    const userData = getUserData();
    const itemData = await getItemById(ctx.params.id);
    const isCreator = userData && itemData._ownerId === userData.id;
    //za likes
    let viewLike = true;
    if (isCreator || !userData){
        viewLike = false
    }else{
        viewLike = true;
    }
    const [item, likes, hasLike] = await Promise.all([
        getItemById(ctx.params.id),
        getLikesByItemId(ctx.params.id),
        userData ? getMyLikeByItemId(ctx.params.id, userData.id) : 0
    ])
    if(hasLike){
        viewLike = false
    }
    // ------->
    ctx.render(detailsTemplate(itemData, isCreator, onDelete, viewLike, onClick, likes));
    
    async function onClick(event){
        event.preventDefault();
        likeItem(itemData._id)
        ctx.page.redirect(`/details/${itemData._id}`)
               console.log('onClick');
    }
    async function onDelete() {
        const choise = confirm('Are you sure you want to delete this book?');

        if (choise) {
            await deleteItem(itemData._id);
            ctx.page.redirect('/books');
        }
    }
}
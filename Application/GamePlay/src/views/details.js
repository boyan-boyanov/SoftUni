import { commentGame, deleteGame, getGameById, getGameComments } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (data, isCreator, onDelete, viewComment, gameComments, onComment) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${data.imageUrl} />
            <h1>${data.title}</h1>
            <span class="levels">MaxLevel: ${data.maxLevel}</span>
            <p class="type">${data.category}</p>
        </div>

        <p class="text">
            ${data.summary}
        </p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
        <h2>Comments:</h2>
        ${gameComments.length > 0 
        ? html`<ul>
            <!-- list all comments for current game (If any) -->
                       
            ${gameComments.map(commentTemplate)}                 
            
            
        </ul>` 
        : html`<p class="no-comment">No comments.</p>`}
        <div class="details-comments"></div>
                
    </div>

    <!-- Edit/Delete buttons ( Only for creator of this game )  -->
    ${isCreator ? html`<div class="buttons">
        <a href="/edit/${data._id}" class="button">Edit</a>
        <a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>
    </div>` : null}

    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${viewComment ? html`<article class="create-comment">
        <label>Add new comment:</label>
        <form class="form" @submit=${onComment}>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>
    ` : null}

</section>
`;

const commentTemplate = (com) => html`
<li class="comment">
    <p>Content: ${com.comment}</p>
</li>
`

export async function detailsPage(ctx) {

    const userData = getUserData();
    const gameData = await getGameById(ctx.params.id);
    const gameComments = await getGameComments(ctx.params.id)
    const isCreator = userData && gameData._ownerId === userData.id;
    let viewComment = true;
    if (isCreator || !userData) {
        viewComment = false
    } else {
        viewComment = true;
    }
    console.log(gameComments);
    ctx.render(detailsTemplate(gameData, isCreator, onDelete, viewComment, gameComments, onComment));

    async function onClick(event) {
        event.preventDefault();
        likeBook(gameData._id)
        ctx.page.redirect(`/details/${gameData._id}`)

    }
    async function onComment(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const comment = formData.get('comment').trim();
        //commentGame
        if(gameData._ownerId != userData.id ){
            const commentRequest = await commentGame(ctx.params.id, comment);
        const commentData = await commentRequest
        ctx.page.redirect(`/details/${gameData._id}`)
        }
        

        
        console.log(gameData);
        console.log(userData);
    }


    async function onDelete() {
        const choise = confirm('Are you sure you want to delete this book?');

        if (choise) {
            await deleteGame(gameData._id);
            ctx.page.redirect('/');
        }
    }
}

/*
<div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <!-- list all comments for current game (If any) -->
                        <li class="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li class="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <!-- Display paragraph: If there are no games in the database -->
                    <p class="no-comment">No comments.</p>
                </div>
*/
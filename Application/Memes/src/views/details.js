import { deleteItem, getItemById} from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (data, isCreator, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${data.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${data.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${data.description}</p>

            ${isCreator ? html`<a class="button warning" href="/edit/${data._id}">Edit</a>
            <button class="button danger" href="javascript:void(0)" @click=${onDelete}>Delete</button>` : ""}
           
            
            
        </div>
    </div>
</section>
`;



export async function detailsPage(ctx) {
    const userData = getUserData();
    const itemData = await getItemById(ctx.params.id);
    const isCreator = userData && itemData._ownerId === userData.id;
   
    ctx.render(detailsTemplate(itemData, isCreator, onDelete));
   
    async function onDelete() {
        if (isCreator){
            const choise = confirm('Are you sure you want to delete this Memes?');
    
            if (choise) {
                console.log('delete');
                await deleteItem(itemData._id);
                              
                ctx.page.redirect('/catalog');
            }
        }
    }
}
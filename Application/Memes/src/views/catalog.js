import { getAllItems } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (items) =>html`
<section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
				<!-- Display : All memes in database ( If any ) -->                            
                                
                ${items.length == 0 
        ? html`<p class="no-memes">No memes in database.</p>` 
        : html`${items.map(itemCard)}`}
				<!-- Display : If there are no memes in database -->				
			</div>
        </section>`

const itemCard = (item) => html`
    <div class="meme">
        <div class="card">
            <div class="info">
                <p class="meme-title">${item.title}</p>
                <img class="meme-image" alt="meme-img" src=${item.imageUrl}>
            </div>
            <div id="data-buttons">
                <a class="button" href="/details/${item._id}">Details</a>
            </div>
        </div>
    </div>`

export async function catalogPage(ctx) {
    const itemData = await getAllItems();
            ctx.render(catalogTemplate(itemData));
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
import { editGame, getGameById } from "../api/data.js";
import { html } from "../lib.js";
//import { notify } from "../notify.js";


const editTemplate = (onSubmit, data) => html`
<section id="edit-page" class="auth">
    <form id="edit" @submit=${onSubmit}>
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value=${data.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value=${data.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value=${data.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value=${data.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${data.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`

export async function editPage(ctx) {
    const gameData = await getGameById(ctx.params.id);
    ctx.render(editTemplate(onSubmit, gameData));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const title = formData.get('title').trim();
        const category = formData.get('category').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const maxLevel = formData.get('maxLevel').trim();
        const summary = formData.get('summary').trim();

        if (title == '' || category == '' || imageUrl == '' || maxLevel == '' || summary == "") {
            return alert('All fields are required!');
            // notify('All fields are required!');
        }

        await editGame(gameData._id, { title, category, maxLevel, imageUrl, summary });

        ctx.page.redirect('/');
    }
}

/*
<section id="edit-page" class="edit">
            <form id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" value="A Court of Thorns and Roses">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description">Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price ...</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" value="/images/book1.png">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" value="Fiction">
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>
*/
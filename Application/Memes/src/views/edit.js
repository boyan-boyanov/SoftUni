import { editItem, getItemById } from "../api/data.js";
import { html } from "../lib.js";
import { notify } from "../notify.js";


const editTemplate = (onSubmit, data) => html`
<section id="edit-meme">
    <form id="edit-form" @submit=${onSubmit}>
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${data.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${data.description}>
                                    </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${data.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`

export async function editPage(ctx) {
    const itemData = await getItemById(ctx.params.id);

    ctx.render(editTemplate(onSubmit, itemData));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        
        if(title == '' || description == '' || imageUrl == '') {
            // return alert('All fields are required!');
            notify('All fields are required!');
        }
        console.log(title);
        await editItem(itemData._id, {title, description, imageUrl});

        ctx.page.redirect(`/details/${itemData._id}`);
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
import { listedGames } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    <!-- Display div: with information about every game (if any) -->
            ${games.map(gameCard)}
        <!-- Display paragraph: If there is no games  -->
    <h3 class="no-articles">No articles yet</h3>
</section>`

const gameCard = (game) => html`
<div class="allGames">
    <div class="allGames-info">
    <img src=${game.imageUrl}>
    <h6>${game.category}</h6>
    <h2>${game.title}</h2>
    <a href="/details/${game._id}" class="details-button">Details</a>
    </div>
</div>`

export async function catalogPage(ctx) {
    const gameData = await listedGames();
    ctx.render(catalogTemplate(gameData));
}

/*
<section id="catalog-page">
            <h1>All Games</h1>
            <!-- Display div: with information about every game (if any) -->
            <div class="allGames">
                <div class="allGames-info">
                    <img src="./images/avatar-1.jpg">
                    <h6>Action</h6>
                    <h2>Cover Fire</h2>
                    <a href="#" class="details-button">Details</a>
                </div>

            </div>
            <div class="allGames">
                <div class="allGames-info">
                    <img src="./images/avatar-1.jpg">
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <a href="#" class="details-button">Details</a>
                </div>

            </div>
            <div class="allGames">
                <div class="allGames-info">
                    <img src="./images/avatar-1.jpg">
                    <h6>Action</h6>
                    <h2>MineCraft</h2>
                    <a href="#" class="details-button">Details</a>
                </div>
            </div>

            <!-- Display paragraph: If there is no games  -->
            <h3 class="no-articles">No articles yet</h3>
        </section>
*/
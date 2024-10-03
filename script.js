document.addEventListener('DOMContentLoaded', () => {
    const pokemonContainer = document.getElementById('pokemon-container');


    const pokemons = [
        { name: "Bulbasaur", image: "./sampleImage.png" },
        { name: "Ivysaur", image: "./sampleImage.png" },
        { name: "Venusaur", image: "./sampleImage.png" },
        { name: "Charmander", image: "./sampleImage.png" },
        { name: "Charmeleon", image: "./sampleImage.png" },
        { name: "Charizard", image: "./sampleImage.png" },
        { name: "Squirtle", image: "./sampleImage.png" },
        { name: "Wartortle", image: "./sampleImage.png" },
        { name: "Blastoise", image: "./sampleImage.png" },
        { name: "Pikachu", image: "./sampleImage.png" },
        { name: "Raichu", image: "./sampleImage.png" },
        { name: "Jigglypuff", image: "./sampleImage.png" },
        { name: "Gengar", image: "./sampleImage.png" },
        { name: "Eevee", image: "./sampleImage.png" },
        { name: "Snorlax", image: "./sampleImage.png" },
        { name: "Dragonite", image: "./sampleImage.png" },
        { name: "Mewtwo", image: "./sampleImage.png" },
        { name: "Mew", image: "./sampleImage.png" },
        { name: "Lugia", image: "./sampleImage.png" },
        { name: "Ho-oh", image: "./sampleImage.png" }
    ];

    // Function to render Pokemon cards
    function renderPokemonCards() {
        pokemons.forEach(pokemon => {
            const card = document.createElement('div');
            card.classList.add('pokemon-card');

            const img = document.createElement('img');
            img.src = pokemon.image;
            img.alt = `${pokemon.name} Image`;
            img.classList.add('pokemon-image');

            const info = document.createElement('div');
            info.classList.add('pokemon-info');

            const name = document.createElement('div');
            name.classList.add('pokemon-name');
            name.textContent = pokemon.name;

            // Create an anchor element and wrap the button inside it
            const anchor = document.createElement('a');
            anchor.href = './pokemondetail.html';  // Redirects to the pokemon details page

            const viewBtn = document.createElement('button');
            viewBtn.classList.add('view-btn');
            viewBtn.textContent = 'View Image';

            anchor.appendChild(viewBtn); // Button inside the anchor

            info.appendChild(name);
            info.appendChild(anchor); // Append anchor with button to the info

            card.appendChild(img);
            card.appendChild(info);

            pokemonContainer.appendChild(card);
        });
    }

    // Render 20 Pokemon cards
    renderPokemonCards();
});

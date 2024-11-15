const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
let nextUrl = `${API_URL}?limit=20`;
const caughtPokemon = JSON.parse(localStorage.getItem('caught')) || [];

const gallerySection = document.getElementById('pokemon-gallery');
const detailSection = document.getElementById('pokemon-detail');
const caughtSection = document.getElementById('caught-pokemon');

const pokemonContainer = document.getElementById('pokemon-container');
const caughtContainer = document.getElementById('caught-container');

// Fetch Pokémon List
async function fetchPokemon(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        nextUrl = data.next;
        displayPokemon(data.results);
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
}

// Display Pokémon in Gallery
function displayPokemon(pokemonList) {
    pokemonList.forEach(pokemon => {
        const pokemonId = pokemon.url.match(/\/(\d+)\/$/)[1];
        const card = document.createElement('div');
        card.classList.add('pokemon-card');
        card.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png" alt="${pokemon.name}">
            <p>${pokemon.name}</p>
        `;
        card.addEventListener('click', () => viewDetails(pokemon.url));
        pokemonContainer.appendChild(card);
    });
}

// View Pokémon Details
async function viewDetails(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.querySelector('.pokemon-img').src = data.sprites.other['official-artwork'].front_default;
        document.querySelector('#pokemon-detail h1').textContent = data.name;
        document.getElementById('abilities').textContent = data.abilities.map(a => a.ability.name).join(', ');
        document.getElementById('types').textContent = data.types.map(t => t.type.name).join(', ');
        document.getElementById('caught-status').textContent = caughtPokemon.includes(data.name) ? 'Yes' : 'No';

        gallerySection.classList.add('hidden');
        detailSection.classList.remove('hidden');
    } catch (error) {
        console.error('Error fetching Pokémon details:', error);
    }
}

// Toggle "Caught" Status
function toggleCaught() {
    const pokemonName = document.querySelector('#pokemon-detail h1').textContent;
    const index = caughtPokemon.indexOf(pokemonName);
    if (index === -1) {
        caughtPokemon.push(pokemonName);
    } else {
        caughtPokemon.splice(index, 1);
    }
    localStorage.setItem('caught', JSON.stringify(caughtPokemon));
    document.getElementById('caught-status').textContent = caughtPokemon.includes(pokemonName) ? 'Yes' : 'No';
}

// Display Caught Pokémon
function displayCaughtPokemon() {
    caughtContainer.innerHTML = '';
    caughtPokemon.forEach(name => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');
        card.textContent = name;
        caughtContainer.appendChild(card);
    });

    gallerySection.classList.add('hidden');
    detailSection.classList.add('hidden');
    caughtSection.classList.remove('hidden');
}

// Navigation Handlers
document.getElementById('nav-home').addEventListener('click', () => {
    gallerySection.classList.remove('hidden');
    detailSection.classList.add('hidden');
    caughtSection.classList.add('hidden');
});

document.getElementById('nav-caught').addEventListener('click', displayCaughtPokemon);
document.getElementById('back-btn').addEventListener('click', () => {
    gallerySection.classList.remove('hidden');
    detailSection.classList.add('hidden');
});
document.getElementById('toggle-caught-btn').addEventListener('click', toggleCaught);
document.getElementById('back-to-gallery').addEventListener('click', () => {
    gallerySection.classList.remove('hidden');
    caughtSection.classList.add('hidden');
});

// Load More Pokémon
document.querySelector('.load-more').addEventListener('click', () => {
    if (nextUrl) fetchPokemon(nextUrl);
});

// Initial Load
fetchPokemon(nextUrl);

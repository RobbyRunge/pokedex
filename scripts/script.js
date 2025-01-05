const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const offset = 0;
const limit = 20;
let currentPokemon = 0;
let arrayPokemons = [];

async function init() {
  await fetchPokemons(limit, offset);
  renderPokemons();
  renderDetailPokemonView();
}

async function fetchPokemons(limit, offset) {
  let response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
  let data = await response.json();
  let pokemons = data.results;
  for (let pokemon of pokemons) {
    let pokemonData = await fetch(pokemon.url);
    let pokemonDetails = await pokemonData.json();
    arrayPokemons.push(pokemonDetails);
  }
}

function renderPokemons() {
  let content = document.getElementById('content');
  content.innerHTML = '';
  for (let i = 0; i < arrayPokemons.length; i++) {
    const pokemon = arrayPokemons[i];
    content.innerHTML += getTemplateContentPokemon(pokemon, i);
  }
}
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
let offset = 0;
const limit = 24;
let currentPokemon = 0;
let arrayPokemons = [];

async function init() {
  await fetchPokemons(limit, offset);
  renderPokemons();
}

async function fetchPokemons(limit, offset) {
  showLoadingSpinner(true);
  let response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
  let data = await response.json();
  let pokemons = data.results;
  try {
    for (let pokemon of pokemons) {
      let pokemonData = await fetch(pokemon.url);
      let pokemonDetails = await pokemonData.json();
      arrayPokemons.push(pokemonDetails);
    }
  } catch (error) {
    console.error('Fehler beim Laden neuer Pokémon:', error);
  } finally {
    showLoadingSpinner(false);
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

async function morePokemons() {
  showLoadingSpinner(true); 
  try {
    offset += limit; 
    await fetchPokemons(limit, offset);
    renderPokemons();
  } catch (error) {
    console.error('Fehler beim Laden neuer Pokémon:', error);
  } finally {
    showLoadingSpinner(false);
  }
}

function showLoadingSpinner(show) {
  const spinner = document.getElementById('loading-spinner');
  if (show) {
    spinner.classList.remove('d-none');
    spinner.classList.add('load-overlay')
  } else {
    spinner.classList.add('d-none');
    spinner.classList.remove('load-overlay')
  }
}
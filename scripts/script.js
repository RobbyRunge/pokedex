const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
let offset = 0;
const limit = 20;
let currentPokemons = []; 
let arrayPokemons = [];

async function init() {
  await fetchPokemons(limit, offset);
  currentPokemons = arrayPokemons;
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

async function addMorePokemons() {
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

function getPokemonTypeData(pokemon) {
  const type = pokemon.types[0].type.name;
  const secondType = pokemon.types[1] ? pokemon.types[1].type.name : null;
  const typeClass = `type-${type}`;
  const secondTypeHTML = getTemplateOfSecondType(secondType);
  return { type, secondType, typeClass, secondTypeHTML };
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

function searchPokemon() {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  if (query.length < 3) {
    alertEmptyInput();
    return;
  }
  const filteredPokemons = arrayPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query));
  renderFilteredPokemons(filteredPokemons);
}

function renderFilteredPokemons(pokemons) {
  let content = document.getElementById('content');
  let inputField = document.getElementById('search-input');
  let btnLoadMore = document.getElementById('load-more');
  let btnScrollTop = document.getElementById('scroll-top');
  let btnReset = document.getElementById('reset');
  content.innerHTML = '';
  if (btnLoadMore) {
    btnLoadMore.classList.add('d-none');
    btnScrollTop.classList.add('d-none');
  }
  if (pokemons.length === 0) {
    content.innerHTML += getTemplateNoPokemonFound();
    inputField.value = '';
    return;
  }
  for (let i = 0; i < pokemons.length; i++) {
    inputField.value = '';
    const pokemon = pokemons[i];
    content.innerHTML += getTemplateContentPokemon(pokemon, arrayPokemons.indexOf(pokemon));
    btnReset.classList.remove('d-none');
    btnReset.classList.add('nothing-found', 'design-btns');
  }
}

function alertEmptyInput() {
  const inputField = document.getElementById('search-input').value.trim();
  const alertElement = document.getElementById('alert-empty-input');
  if (inputField.length < 3) {
    alertElement.classList.remove('d-none'); 
    alertElement.textContent = "Please enter at least 3 characters!"; 
    setTimeout(displayNoneText, 2000);
  } else {
    alertElement.classList.add('d-none');
  }
}

function displayNoneText() {
  let alertTextRemove = document.getElementById('alert-empty-input');
  alertTextRemove.classList.add('d-none');
}


function resetSearch() {
  const content = document.getElementById('content');
  let inputField = document.getElementById('search-input');
  let btnLoadMore = document.getElementById('load-more');
  let btnReset = document.getElementById('reset-btn');
  content.innerHTML = '';
  if (btnLoadMore) {
    btnLoadMore.classList.remove('d-none');
  }
  if (btnReset) {
    btnReset.remove();
  }
  inputField.value = '';
  renderPokemons();
}

function scrollToTopFunction() {
  document.documentElement.scrollTop = 0;
}
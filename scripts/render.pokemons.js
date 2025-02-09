/**
 * Base URL for the Pokémon API.
 */
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

/**
 * Offset for pagination in API requests.
 */
let offset = 0;

/**
 * Number of Pokémon to fetch per API call.
 */
const limit = 20;

/**
 * Index of the currently selected Pokémon.
 */
let currentPokemon = 0;

/**
 * Array to store details of all fetched Pokémon.
 */
let arrayPokemons = [];

/**
 * Array to store filtered Pokémon based on search criteria.
 */
let filteredPokemonsArray = [];

/**
 * Initializes the application by fetching and rendering Pokémon.
 */
async function init() {
  await fetchPokemons(limit, offset);
  renderPokemons();
}

/**
 * Fetches Pokémon data from the API and updates the global array.
 * @param {number} limit - Number of Pokémon to fetch.
 * @param {number} offset - Offset for the Pokémon data.
 */
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

/**
 * Renders all Pokémon in the global array to the page.
 */
function renderPokemons() {
  let content = document.getElementById('content');
  content.innerHTML = '';
  for (let i = 0; i < arrayPokemons.length; i++) {
    const pokemon = arrayPokemons[i];
    content.innerHTML += getTemplateContentPokemon(pokemon, i);
  }
}

/**
 * Adds more Pokémon to the list by fetching the next set of data.
 */
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

/**
 * Extracts type data from a Pokémon object.
 * @param {Object} pokemon - Pokémon details object.
 * @returns {Object} An object containing type information.
 */
function getPokemonTypeData(pokemon) {
  const type = pokemon.types[0].type.name;
  const secondType = pokemon.types[1] ? pokemon.types[1].type.name : null;
  const typeClass = `type-${type}`;
  const secondTypeHTML = getTemplateOfSecondType(secondType);
  return { type, secondType, typeClass, secondTypeHTML };
}

/**
 * Shows or hides the loading spinner.
 * @param {boolean} show - Whether to show the spinner.
 */
function showLoadingSpinner(show) {
  const spinner = document.getElementById('loading-spinner');
  if (show) {
    spinner.classList.remove('d-none');
    spinner.classList.add('load-overlay');
  } else {
    spinner.classList.add('d-none');
    spinner.classList.remove('load-overlay');
  }
}

/**
 * Displays an alert if the search input is empty or invalid.
 */
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

/**
 * Hides the alert message for invalid search input.
 */
function displayNoneText() {
  let alertTextRemove = document.getElementById('alert-empty-input');
  alertTextRemove.classList.add('d-none');
}

/**
 * Scrolls the page to the top.
 */
function scrollToTopFunction() {
  document.documentElement.scrollTop = 0;
}
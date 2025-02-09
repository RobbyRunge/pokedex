/**
 * Searches for Pokémon matching the input query and updates the display.
 */
function searchPokemon() {
  const input = document.getElementById('search-input').value.trim().toLowerCase();
  if (input.length < 3) {
    alertEmptyInput();
    return;
  }
  filteredPokemonsArray = arrayPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(input));
  renderFilteredPokemons(filteredPokemonsArray);
}

/**
 * Event listener to trigger search on pressing the Enter key.
 */
document.getElementById("search-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("search-btn").click();
  }
});

/**
 * Renders the filtered Pokémon to the page.
 * @param {Array} pokemons - Array of filtered Pokémon objects.
 */
function renderFilteredPokemons(pokemons) {
  let content = document.getElementById('content');
  let inputField = document.getElementById('search-input');
  let btnLoadMore = document.getElementById('load-more');
  let btnScrollTop = document.getElementById('scroll-top');
  let btnReset = document.getElementById('reset');
  content.innerHTML = '';
  queryIfElseForFilterdPokemons(pokemons, btnLoadMore, btnScrollTop, inputField);
  loopForFilteredPokemon(pokemons, inputField, btnReset);
}

/**
 * Handles UI updates based on filtered Pokémon results.
 * @param {Array} pokemons - Filtered Pokémon array.
 * @param {HTMLElement} btnLoadMore - Load more button element.
 * @param {HTMLElement} btnScrollTop - Scroll to top button element.
 * @param {HTMLElement} inputField - Search input field element.
 */
function queryIfElseForFilterdPokemons(pokemons, btnLoadMore, btnScrollTop, inputField) {
  if (btnLoadMore) {
    btnLoadMore.classList.add('d-none');
    btnScrollTop.classList.add('d-none');
  }
  if (pokemons.length === 0) {
    content.innerHTML += getTemplateNoPokemonFound();
    inputField.value = '';
    return;
  }
}

/**
 * Loops through filtered Pokémon and updates the UI.
 * @param {Array} pokemons - Filtered Pokémon array.
 * @param {HTMLElement} inputField - Search input field element.
 * @param {HTMLElement} btnReset - Reset button element.
 */
function loopForFilteredPokemon(pokemons, inputField, btnReset) {
  for (let i = 0; i < pokemons.length; i++) {
    inputField.value = '';
    const pokemon = pokemons[i];
    content.innerHTML += getTemplateContentPokemon(pokemon, i);
    btnReset.classList.remove('d-none');
    btnReset.classList.add('nothing-found', 'design-btns');
  }
}

/**
 * Resets the search and displays all Pokémon.
 */
function resetSearch() {
  const content = document.getElementById('content');
  let inputField = document.getElementById('search-input');
  let btnReset = document.getElementById('reset');
  let btnLoadMore = document.getElementById('load-more');
  let btnScrollTop = document.getElementById('scroll-top');
  filteredPokemonsArray = [];
  clearArrayAfterReset(content, inputField);
  displayButtonsAfterReset(btnReset, btnLoadMore, btnScrollTop);
  renderPokemons();
}

/**
 * Clears the array and UI content after reset.
 * @param {HTMLElement} content - Content container element.
 * @param {HTMLElement} inputField - Search input field element.
 */
function clearArrayAfterReset(content, inputField) {
  content.innerHTML = '';
  inputField.value = '';
}

/**
 * Updates button visibility after a reset.
 * @param {HTMLElement} btnReset - Reset button element.
 * @param {HTMLElement} btnLoadMore - Load more button element.
 * @param {HTMLElement} btnScrollTop - Scroll to top button element.
 */
function displayButtonsAfterReset(btnReset, btnLoadMore, btnScrollTop) {
  btnReset.classList.remove('nothing-found', 'design-btns');
  btnReset.classList.add('d-none');
  if (btnLoadMore) btnLoadMore.classList.remove('d-none');
  if (btnScrollTop) btnScrollTop.classList.remove('d-none');
}
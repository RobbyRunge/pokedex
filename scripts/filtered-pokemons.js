function searchPokemon() {
  const input = document.getElementById('search-input').value.trim().toLowerCase();
  if (input.length < 3) {
    alertEmptyInput();
    return;
  }
  filteredPokemonsArray = arrayPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(input));
  renderFilteredPokemons(filteredPokemonsArray);
}

document.getElementById("search-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("search-btn").click();
  }
});

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

function loopForFilteredPokemon (pokemons, inputField, btnReset) {
  for (let i = 0; i < pokemons.length; i++) {
    inputField.value = '';
    const pokemon = pokemons[i];
    content.innerHTML += getTemplateContentPokemon(pokemon, i);
    btnReset.classList.remove('d-none');
    btnReset.classList.add('nothing-found', 'design-btns');
  }
}

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

function clearArrayAfterReset(content, inputField) {
  content.innerHTML = '';
  inputField.value = '';
}

function displayButtonsAfterReset(btnReset, btnLoadMore, btnScrollTop) {
  btnReset.classList.remove('nothing-found', 'design-btns');
  btnReset.classList.add('d-none');
  if (btnLoadMore) btnLoadMore.classList.remove('d-none');
  if (btnScrollTop) btnScrollTop.classList.remove('d-none');
}
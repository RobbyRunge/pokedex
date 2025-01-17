/**
 * Toggles the overlay display for a selected Pokémon.
 * @param {number} i - Index of the selected Pokémon.
 */
function openOrCloseOverlay(i) {
  const activeArray = filteredPokemonsArray.length > 0 ? filteredPokemonsArray : arrayPokemons;
  currentPokemon = i;
  if (activeArray[i]) {
    const overlay = document.getElementById('overlay');
    if (overlay.classList.contains('d-none')) {
      overlay.innerHTML = getTemplateOverlay(activeArray[i], i);
      overlay.classList.remove('d-none');
      document.body.classList.add('no-scroll');
    } else {
      overlay.classList.add('d-none');
      overlay.innerHTML = '';
      document.body.classList.remove('no-scroll');
    }
  }
}

/**
 * Displays the statistics page for the currently selected Pokémon.
 */
function goToStatsPage() {
  const activeArray = filteredPokemonsArray.length > 0 ? filteredPokemonsArray : arrayPokemons;
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = getTemplateStats(activeArray[currentPokemon], currentPokemon);
}

/**
 * Displays the start page for the currently selected Pokémon.
 */
function goToStartPage() {
  const activeArray = filteredPokemonsArray.length > 0 ? filteredPokemonsArray : arrayPokemons;
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = getTemplateOverlay(activeArray[currentPokemon], currentPokemon);
}

/**
 * Navigates to the next or previous Pokémon in the list.
 * @param {string} direction - 'next' or 'prev' to indicate navigation direction.
 */
function nextOrPrevPokemon(direction) {
  const activeArray = filteredPokemonsArray.length > 0 ? filteredPokemonsArray : arrayPokemons;
  if (direction === 'next') {
    currentPokemon = (currentPokemon + 1) % activeArray.length;
  } else if (direction === 'prev') {
    currentPokemon = (currentPokemon - 1 + activeArray.length) % activeArray.length;
  }
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = getTemplateOverlay(activeArray[currentPokemon], currentPokemon);
}

/**
 * Closes the overlay display.
 */
function closeBtnOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.classList.add('d-none');
  document.body.classList.remove('no-scroll');
}

/**
 * Prevents event bubbling.
 * @param {Event} event - The event to stop propagation for.
 */
function stopBubbling(event) {
  event.stopPropagation();
}
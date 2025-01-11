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

function goToStatsPage() {
  const activeArray = filteredPokemonsArray.length > 0 ? filteredPokemonsArray : arrayPokemons;
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = getTemplateStats(activeArray[currentPokemon], currentPokemon);
}

function goToStartPage() {
  const activeArray = filteredPokemonsArray.length > 0 ? filteredPokemonsArray : arrayPokemons;
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = getTemplateOverlay(activeArray[currentPokemon], currentPokemon);
}

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

function closeBtnOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.classList.add('d-none');
  document.body.classList.remove('no-scroll');
}

function stopBubbling(event) {
  event.stopPropagation();
}
function openOrCloseOverlay(i) {
  if (arrayPokemons[i]) {
    currentPokemon = i;
    const overlay = document.getElementById('overlay');
    if (overlay.classList.contains('d-none')) {
      overlay.innerHTML = getTemplateOverlay(arrayPokemons[i], i);
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
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = getTemplateStats(arrayPokemons[currentPokemon], currentPokemon);
}

function goToStartPage() {
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = getTemplateOverlay(arrayPokemons[currentPokemon], currentPokemon);
}

function closeBtnOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.classList.add('d-none');
  document.body.classList.remove('no-scroll');
}

function stopBubbling(event) {
  event.stopPropagation();
}
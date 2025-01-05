function openOrCloseOverlay() {
  let overlayRef = document.getElementById('overlay');
  // let currentPokemonRef = arrayPokemons[i];
  if (overlayRef.classList.contains('d-none')) {
    document.body.classList.add('no-scroll'); 
    overlayRef.classList.remove('d-none');
  } else {
    document.body.classList.remove('no-scroll'); 
    overlayRef.classList.add('d-none');
  }
}

function stopBubbling(event) {
  event.stopPropagation();
}
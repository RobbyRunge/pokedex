function openOrCloseOverlay(i) {
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

function closeBtnOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.classList.add('d-none');
  document.body.classList.remove('no-scroll');
}

function stopBubbling(event) {
  event.stopPropagation();
}

// erst beim zweiten bild disesen Pfeil hinzufügen
// <img class="arrow-icon rotation-arrow" src="./assets/icons/arrow.png" alt="next" />
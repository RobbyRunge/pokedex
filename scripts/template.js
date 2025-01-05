function getTemplateContentPokemon(pokemon, i) {
  let type = pokemon.types[0].type.name;
  let typeClass = `type-${type}`;

  return `
    <div class="card" onclick="openOrCloseOverlay(${i})">
      <div class="pokemon-header-name center gab-16">
        <h1>#${i + 1}</h1>
        <h1>${pokemon.name}</h1>
      </div>
      <div class="pokemon-picture-background ${typeClass}">
        <img class="pokemon-picture" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" />
      </div>
      <div class="pokemon-footer-icons center gab-16">
        <img class="pokemon-icon" src="./assets/icons/${type}.png" alt="${type}" />
        <p><strong>${type}</strong></p>
        <img class="pokemon-icon" src="./assets/icons/${type}.png" alt="${type}" />
      </div>
    </div>
  `;
}

function getTemplateOverlay(pokemon, i) {
  let type = pokemon.types[0].type.name;
  let typeClass = `type-${type}`;

  return `
    <div class="overlay-card" onclick="stopBubbling(event)">
      <div class="overlay-pokemon-header-name">
        <div>
          <h1>#${i + 1}</h1>
        </div>
        <div>
          <h1>${pokemon.name}</h1>
        </div>
        <div>
          <img class="close-btn-overlay" onclick="closeBtnOverlay()" src="./assets/icons/close.png" alt="close">
        </div>
      </div>
      <div class="overlay-pokemon-picture-background ${typeClass}">
        <img class="overlay-pokemon-picture" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" />
      </div>
      <div class="overlay-pokemon-footer-icons center gab-16">
        <img class="overlay-pokemon-icon" src="./assets/icons/${type}.png" alt="${type}" />
        <p><strong>${type}</strong></p>
        <img class="overlay-pokemon-icon" src="./assets/icons/${type}.png" alt="${type}" />
      </div>
      <div class="arrow-position">
        <img class="arrow-icon" src="./assets/icons/arrow.png" alt="next" />
      </div>
    </div>
  `;
}
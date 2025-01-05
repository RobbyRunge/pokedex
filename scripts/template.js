function getTemplateContentPokemon(pokemon, i) {
  let type = pokemon.types[0].type.name;
  let typeClass = `type-${type}`;

  return `
    <div class="card" onclick="openOrCloseOverlay(${i})">
      <div class="pokemon-header-name">
        <h1>#${i + 1}</h1>
        <h1>${pokemon.name}</h1>
      </div>
      <div class="pokemon-picture-background ${typeClass}">
        <img class="pokemon-picture" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" />
      </div>
      <div class="pokemon-footer-icons">
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
        <h1>#${i + 1}</h1>
        <h1>${pokemon.name}</h1>
      </div>
      <div class="overlay-pokemon-picture-background ${typeClass}">
        <img class="overlay-pokemon-picture" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" />
      </div>
      <div class="overlay-pokemon-footer-icons">
        <p><strong>${type}</strong></p>
        <img class="overlay-pokemon-icon" src="./assets/icons/${type}.png" alt="${type}" />
      </div>
    </div>
  `;
}
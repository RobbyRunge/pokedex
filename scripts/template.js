function getTemplateContentPokemon(pokemon, i) {
  let type = pokemon.types[0].type.name;
  let typeClass = `type-${type}`;

  return `
    <div class="card ${typeClass}" onclick="openOrCloseOverlay(${i})">
      <div class="pokemon-header-name">
        <h1>#${i}</h1>
        <h1>${pokemon.name}</h1>
      </div>
      <div class="pokemon-picture-background">
        <img class="pokemon-picture" src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
      </div>
      <div class="pokemon-footer-icons">
        <p><strong>${type}</strong></p>
        <img class="pokemon-icon" src="./assets/icons/${type}.png" alt="${type}" />
      </div>
    </div>
  `;
}
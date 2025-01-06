function getTemplateContentPokemon(pokemon, i) {
  const { type, typeClass, secondTypeHTML } = getPokemonTypeData(pokemon);
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
        <p><strong>${type}</strong></p>
        <img class="pokemon-icon" src="./assets/icons/${type}.png" alt="${type}" />
        ${secondTypeHTML}
      </div>
    </div>
  `;
}

function getTemplateOverlay(pokemon, i) {
  const { type, typeClass, secondTypeHTML } = getPokemonTypeData(pokemon);
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
      <div class="overlay-pokemon-footer-icons">
        <div class="center gab-16">
          <p><strong>${type}</strong></p>
          <img class="overlay-pokemon-icon" src="./assets/icons/${type}.png" alt="${type}" />
        </div>
        ${secondTypeHTML ? `
        <div class="center gab-16">
          ${secondTypeHTML}
        </div>` : ''}
      </div>
      <div class="arrow-position">
        <img onclick="goToStatsPage()" class="arrow-icon" src="./assets/icons/arrow.png" alt="next" />
      </div>
    </div>
  `;
}

function getTemplateOfSecondType(secondType) {
  if (!secondType) return '';
  return `
    <img class="pokemon-icon" src="./assets/icons/${secondType}.png" alt="${secondType}" />
    <p><strong>${secondType}</strong></p>
  `;
}

function getTemplateResetButton() {
  return `
    <div class="reset-search">
      <button class="btn-reset" id="reset" onclick="resetSearch()">
        <img src="./assets/icons/reset.png" alt="" />
      </button>
    </div>
  `;
}

function getTemplateStats(pokemon, i) {
  const { type, typeClass, secondTypeHTML } = getPokemonTypeData(pokemon);
  return `
    <div class="overlay-card" onclick="stopBubbling(event)">
      <div class="overlay-pokemon-header-name">
        <div>
          <h1>#${i + 1}</h1>
        </div>
        <div>
          <h1 class="${typeClass} h1-second-page">${pokemon.name}</h1>
        </div>
        <div>
          <img onclick="goToStartPage()" class="arrow-icon rotate" src="./assets/icons/arrow.png" alt="next" />
          <img class="close-btn-overlay" onclick="closeBtnOverlay()" src="./assets/icons/close.png" alt="close">
        </div>
      </div>
      <div class="overlay-pokemon-picture-background-second-page">
        <div>
          <h2>Base Stats</h2>
          <table class="stats-table">
            <tr>
              <td><strong>Weight:</strong></td>
              <td>${pokemon.weight}</td>
            </tr>
            <tr>
              <td><strong>Height:</strong></td>
              <td>${pokemon.height}</td>
            </tr>            
            <tr>
              <td><strong>HP:</strong></td>
              <td>${pokemon.stats[0].base_stat}</td>
            </tr>
            <tr>
              <td><strong>Attack:</strong></td>
              <td>${pokemon.stats[1].base_stat}</td>
            </tr>
            <tr>
              <td><strong>Defense:</strong></td>
              <td>${pokemon.stats[2].base_stat}</td>
            </tr>
            <tr>
              <td><strong>Special Attack:</strong></td>
              <td>${pokemon.stats[3].base_stat}</td>
            </tr>
            <tr>
              <td><strong>Special Defense:</strong></td>
              <td>${pokemon.stats[4].base_stat}</td>
            </tr>
            <tr>
              <td><strong>Speed:</strong></td>
              <td>${pokemon.stats[5].base_stat}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="overlay-pokemon-footer-icons">
        <div class="center gab-16">
          <p><strong>${type}</strong></p>
          <img class="overlay-pokemon-icon" src="./assets/icons/${type}.png" alt="${type}" >
        </div>
        ${secondTypeHTML ? `
        <div class="center gab-16">
          ${secondTypeHTML}
        </div>` : ''}
      </div>
    </div>
  `;
}
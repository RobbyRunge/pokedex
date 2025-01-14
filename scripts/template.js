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
        <div class="background-color-icon">
          <img class="pokemon-icon" src="./assets/icons/${type}.svg" alt="${type}" />
        </div>
        ${secondTypeHTML}        
      </div>
    </div>
  `;
}

function getTemplateOverlay(pokemon, i) {
  const { type, typeClass, secondTypeHTML } = getPokemonTypeData(pokemon);
  return `
    <div id="overlayId-${i}" class="overlay-card" onclick="stopBubbling(event)">
      <div class="overlay-pokemon-header-name">
        <div>
          <h1>#${i + 1}</h1>
        </div>
        <div>
          <h1 class="h1-second-page"">${pokemon.name}</h1>
        </div>
        <div class="responsive-btns">
          <img onclick="goToStatsPage()" class="arrow-icon" src="./assets/icons/arrow.png" alt="next" />
          <img class="close-btn-overlay" onclick="closeBtnOverlay()" src="./assets/icons/close.png" alt="close">
        </div>
      </div>
      <div class="overlay-pokemon-picture-background ${typeClass}">
        <img onclick="nextOrPrevPokemon('prev')" class="arrow-icon rotate" src="./assets/icons/arrow2.png" alt="prev" />
        <img class="overlay-pokemon-picture" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" />
        <img onclick="nextOrPrevPokemon('next')" class="arrow-icon" src="./assets/icons/arrow2.png" alt="next" />        
      </div>
      <div class="overlay-pokemon-footer-icons">
        <div class="center gab-16">
          <p><strong>${type}</strong></p>
          <div class="background-color-icon">
            <img class="pokemon-icon" src="./assets/icons/${type}.svg" alt="${type}" />
          </div>
        </div>
        ${secondTypeHTML ? `
        <div class="center gab-16">
          ${secondTypeHTML}
        </div>` : ''}
      </div>
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
        <div class="responsive-btns">
          <img onclick="goToStartPage()" class="arrow-icon rotate" src="./assets/icons/arrow.png" alt="next" />
          <img class="close-btn-overlay" onclick="closeBtnOverlay()" src="./assets/icons/close.png" alt="close">
        </div>
      </div>
      <div class="overlay-pokemon-picture-background-second-page">
        <div>
          <h2>Base Stats</h2>
          <table class="stats-table">
            <tr>
              <td><strong>Base Experience:</strong></td>
              <td>${pokemon.base_experience}</td>
            </tr>          
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
          <div class="background-color-icon">
            <img class="pokemon-icon" src="./assets/icons/${type}.svg" alt="${type}" >
          </div>
        </div>
        ${secondTypeHTML ? `
        <div class="center gab-16">
          ${secondTypeHTML}
        </div>` : ''}
      </div>
    </div>
  `;
}

function getTemplateOfSecondType(secondType) {
  if (!secondType) return '';
  return `
    <div class="background-color-icon">
      <img class="pokemon-icon" src="./assets/icons/${secondType}.svg" alt="${secondType}" />
    </div>
    <p><strong>${secondType}</strong></p>    
  `;
}

function getTemplateNoPokemonFound() {
  return `
    <div class="nothing-found">
      <h1 class="nothing-found">No Pokémon found!</h1>
      <button class="nothing-found design-btns" id="reset" onclick="resetSearch()">Reset</button>
    </div>
  `;
}
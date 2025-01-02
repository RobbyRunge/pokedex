const BASE_URL = 'https://pokeapi.co/api/v2/';
const limit_pokemon = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'; // 20 pokemons
let currentPokemon = 0;
let arrayPokemons = [];

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

// function init() {
//   renderPokemons();
// }

// async function getPokemons() {
//   let response = await fetch(limit_pokemon);
//   let data = await response.json();
//   let pokemons = data.results;
//   pokemons.forEach(pokemon => {
//     arrayPokemons.push(pokemon);
//   });
//   renderPokemons();
// }

function createCard(pokemon) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <h3>${pokemon.name.toUpperCase()}</h3>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <p>Type: ${pokemon.types.map(t => t.type.name).join(', ')}</p>`;
    return card;
}

document.getElementById('pokemon-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  
  const count = parseInt(document.getElementById('count').value);
  const container = document.getElementById('cards-container');
  container.innerHTML = ''; 

  for (let i = 1; i <= count; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    container.appendChild(createCard(data));
  }
});
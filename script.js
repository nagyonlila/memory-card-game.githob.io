const symbols = ['🍎', '🍌', '🍒', '🍊', '🍇', '🍋', '🍉', '🍓'];
const cards = symbols.concat(symbols); // Duplicate symbols to create pairs
cards.sort(() => Math.random() - 0.5);

const gameBoard = document.getElementById('gameBoard');
cards.forEach((symbol, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.symbol = symbol;
  card.dataset.index = index;
  card.addEventListener('click', flipCard);
  gameBoard.appendChild(card);
});

let flippedCards = [];

function flipCard() {
  if (flippedCards.length === 2 || this.classList.contains('flip')) return;

  this.classList.add('flip');
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
    flippedCards.forEach(card => card.removeEventListener('click', flipCard));
  } else {
    flippedCards.forEach(card => card.classList.remove('flip'));
  }
  flippedCards = [];
}

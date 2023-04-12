
// Creates Card board //
function createCards() {
    const numCards = document.getElementById('numCards').value;
    const board = document.querySelector('.board');
    board.innerHTML = ''; // clear any existing cards
    for (let i = 0; i < numCards; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
      board.appendChild(card);
    }
  }
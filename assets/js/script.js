
// Creates Card Board //
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


// Set BG-img to .card //
const images = [];

// Load all images from the 'images' folder
const imgFolder = 'assets/images/obras/';
const imgExtension = '.jpg';

for (let i = 1; i <= numCards; i++) {
    const imgPath = imgFolder + i + imgExtension;
    const img = new Image();
    img.src = imgPath;
    images.push(img);
}
  
const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.backgroundImage = `url(${images[index % images.length]})`;
  });


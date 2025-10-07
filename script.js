function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Project Slider
const cards = document.querySelectorAll(".project-card");
const projectCardsContainer = document.querySelector(".project-cards");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let currentIndex = 0;
const totalCards = cards.length;

function updateCards() {
    const cardWidth = cards[0].offsetWidth + 25;
    const containerWidth = cardWidth * 5;
    
    const positions = [
        (currentIndex - 2 + totalCards) % totalCards,
        (currentIndex - 1 + totalCards) % totalCards,
        currentIndex,
        (currentIndex + 1) % totalCards,
        (currentIndex + 2) % totalCards
    ];
    
    cards.forEach(card => {
        card.style.display = 'none';
    });
    
    positions.forEach(pos => {
        cards[pos].style.display = 'flex';
    });
    
    const offset = -2 * cardWidth;
    projectCardsContainer.style.transform = `translateX(${offset}px)`;
}

function nextCard() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCards();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCards();
}

window.addEventListener('load', () => {
    updateCards();
});

nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);
window.addEventListener('resize', updateCards);
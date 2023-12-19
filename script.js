const featuredCards = document.querySelectorAll(".featured-event");
const slider = document.getElementById("event-slider");

let currentSlide = 0;

const showSlide = (slideIndex) => {
  featuredCards.forEach((card, index) => {
    card.style.display = "none";
  });
  featuredCards[slideIndex].style.display = "block";
};

showSlide(currentSlide);

const nextSlide = () => {
  currentSlide++;
  if (currentSlide >= featuredCards.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
};

const prevSlide = () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = featuredCards.length - 1;
  }
  showSlide(currentSlide);
};

// Add event listeners to navigation buttons

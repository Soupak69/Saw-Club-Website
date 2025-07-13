document.addEventListener("DOMContentLoaded", function () {
  const eventCards = document.querySelectorAll(".event-card");

  eventCards.forEach((card) => {
    let currentSlide = 0;
    const slides = card.querySelectorAll(".event-slide");
    const totalSlides = slides.length;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 8000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Expand General Guidelines items
  const generalItems = document.querySelectorAll(".generalGuidlines .guidlinesItemTitle");
  generalItems.forEach((item) => {
    item.classList.add("active");
  });

  // ensure others stay collapsed 
  const otherSections = document.querySelectorAll(
    ".staffItemTitle, .regulationsItemTitle, .administrationItemTitle"
  );
  otherSections.forEach((item) => {
    item.classList.remove("active");
  });

  // toggle click functionality
  const allToggles = document.querySelectorAll(
    ".guidlinesItemTitle, .staffItemTitle, .regulationsItemTitle, .administrationItemTitle"
  );
  allToggles.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});
// image carousel
const images = [
  "img/Firefly_surrealist_giant_hourglass.jpg",
  "img/Firefly_impressionist-style_oil_painting.jpg",
  "img/Firefly_watercolor_majestic_coyote.jpg",
  "img/Firefly_claymation-style_underwater_scene.jpg",
  "img/Firefly_pixel_bustling_night_market.jpg",
  "img/Firefly_ethereal_floating_island.jpg",
  "img/Firefly_impressionist_flowers_with_burger.jpg",
  "img/Firefly_historical_Albert_Einstein_teaching.jpg",
  "img/Firefly_minimalist_mountain_landscape.jpg"
];

let currentImage = 0;
const imageElement = document.querySelector('.carousel-image');

document.querySelector('.prev').addEventListener('click', () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  imageElement.src = images[currentImage];
});

document.querySelector('.next').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  imageElement.src = images[currentImage];
});

// Enlarge Image 
const modal = document.getElementById("imageModal");
  const img = document.getElementById("aiScopeThumbnail");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Optional: click anywhere outside image to close
  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  //Tab Definitions
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');

      // Deactivate all buttons and content
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

      // Activate selected button and content
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
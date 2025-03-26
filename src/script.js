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

document.addEventListener('DOMContentLoaded', function () {
  const expandableItems = document.querySelectorAll(
    '.guidlinesItemTitle, .staffItemTitle, .regulationsItemTitle, .administrationItemTitle'
  );

  expandableItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});
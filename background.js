const background = document.querySelector('.background');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  background.style.backgroundPosition = `0% ${scrollPosition / 10}%`;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector('.change-color');
const colorSpanRef = document.querySelector('.color');
const bodyRef = document.body;

buttonRef.addEventListener('click', () => {
  const newColor = getRandomHexColor();

  bodyRef.style.backgroundColor = newColor;

  colorSpanRef.textContent = newColor;
});
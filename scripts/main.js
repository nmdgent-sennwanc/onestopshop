const colors = ['#bddbf2', '#91bed4', ' #ffba8d', '#f58c42'];

const randomValues = () => {
  document.getElementById('colourbox').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('colourbox').style.height = `${Math.floor(Math.random() * 20) + 40}vh`;
  document.getElementById('colourbox').style.top = `${Math.floor(Math.random() * 50) + 100}px`;
}

document.getElementById('welcomeLogo').addEventListener('click', () => {
  randomValues();
})

window.addEventListener('load', () => {
  randomValues();
});
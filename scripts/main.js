const colors = ['#bddbf2', '#91bed4', ' #ffba8d', '#f58c42'];

const randomValues = () => {
  document.getElementById('colourbox').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('colourbox').style.height = `${Math.floor(Math.random() * 20) + 40}vh`;
  document.getElementById('colourbox').style.top = `${Math.floor(Math.random() * 50) + 100}px`;
  document.getElementById('colourbox').style.width = `${Math.floor(Math.random() * 20) + 40}%`;
  document.getElementById('colourbox').style.right = `${Math.floor(Math.random() * 100)}px`;
}

window.addEventListener('load', () => {
  randomValues();
});

window.setInterval(() => {
  randomValues();
}, 1500);
const colors = ['#bddbf2', '#91bed4', ' #ffba8d', '#f58c42'];

const randomValues = () => {
  document.getElementById('colourbox').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('colourbox').style.height = `${Math.floor(Math.random() * 20) + 40}vh`;
  document.getElementById('colourbox').style.top = `${Math.floor(Math.random() * 20) + 60}px`;
  document.getElementById('colourbox').style.width = `${Math.floor(Math.random() * 20) + 40}%`;
  document.getElementById('colourbox').style.right = `${Math.floor(Math.random() * 100)}px`;
}

let slideIndex = 0;

const showSlides = () =>{
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}


window.addEventListener('load', () => {
  randomValues();
  showSlides();
});

window.setInterval(() => {
  randomValues();
}, 1500);
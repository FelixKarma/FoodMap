let suppBtn = document.getElementById('input');
let modalAlreadyShowed = false;

suppBtn.addEventListener('click', function(e) {
  if( ! modalAlreadyShowed ) {
      modalAlreadyShowed = true
      document.getElementById('modal').style.display = 'block';

  }
});

document.getElementById('modal-close').addEventListener('click', function(e) {
  document.getElementById('modal').style.display = 'none';
  modalAlreadyShowed = false;
})

let theme1 = document.querySelector('#theme1');
let theme2 = document.querySelector('#theme2');
let theme3 = document.querySelector('#theme3');
let theme4 = document.querySelector('#theme4');
let theme5 = document.querySelector('#theme5');


theme1.addEventListener('click', () => {
    document.body.style.background = 'linear-gradient(rgb(255, 165, 0), rgb(255, 0, 0))';
    localStorage.setItem('theme', 'theme1')
})

theme2.addEventListener('click', () => {
    document.body.style.backgroundImage = 'url("../img/bois1.jpg")';
    localStorage.setItem('theme', 'theme2')
})

theme3.addEventListener('click', () => {
    document.body.style.background = 'red';
    localStorage.setItem('theme', 'theme3')
})

theme4.addEventListener('click', () => {
    document.body.style.background = 'linear-gradient(rgb(236, 100, 8), rgb(151, 75, 255))';
    localStorage.setItem('theme', 'theme4')
})

theme5.addEventListener('click', () => {
    document.body.style.background = 'linear-gradient(rgb(236, 183, 141), rgb(236, 100, 8))';
    localStorage.setItem('theme', 'theme5')
})








    
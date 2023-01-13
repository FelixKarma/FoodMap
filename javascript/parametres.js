// // document.getElementById('modal').style.display = 'block';

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

// window.addEventListener('click', function (e) {
//     setTimeout(() => {
//         document.getElementById('modal').style.display = 'none'
//     }, 0000)
// });

// let modalAlreadyShowed = false;
// window.addEventListener('click', function (e) {
//     if (!modalAlreadyShowed) {
//         setTimeout(() => {
//             document.getElementById('modal').style.display = 'block'
//         }, 2000)
//         modalAlreadyShowed = true
//     }
// });

// document.getElementById('modal-close').addEventListener('click', function (e) {
//     document.getElementById('modal').style.display = 'none'
// });

// var confirmExiting = false;

//  document.getElementById('input').addEventListener('input', function (e) {
//      confirmExiting = true
// });

// window.addEventListener('beforeunload', function (e) {
//     if (confirmExiting) {
//         e.preventDefault();
//         e.returnValue = '';
//     }
// });


let theme1 = document.querySelector('#theme1');
let theme2 = document.querySelector('#theme2');
let theme3 = document.querySelector('#theme3');
let theme4 = document.querySelector('#theme4');
let theme5 = document.querySelector('#theme5');


theme1.addEventListener('click', () => {
    document.body.style.background = 'linear-gradient(rgb(255, 165, 0), rgb(255, 0, 0))';
})

theme2.addEventListener('click', () => {
    document.body.style.backgroundImage = 'url("../img/bois1.jpg")';
})

theme3.addEventListener('click', () => {
    document.body.style.background = 'red';
})

theme4.addEventListener('click', () => {
    document.body.style.background = 'linear-gradient(rgb(236, 100, 8), rgb(151, 75, 255))';
})

theme5.addEventListener('click', () => {
    document.body.style.background = 'linear-gradient(rgb(236, 183, 141), rgb(236, 100, 8))';
})

//dropdown.addEventListener('change', function () {
//    const color = this.name;
//    if(color === 'theme5'){
//        document.body.style.background = 'white';
//    }else {
//        document.body.style.background = color;
//    }
//    })
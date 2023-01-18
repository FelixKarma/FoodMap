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
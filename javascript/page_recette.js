function changeImage() {
    var heartImg = document.getElementById("like");
        if (heartImg.src === '../img/empty-heart.svg'){
            heartImg.src = '../img/filled-heart.svg';
        } else {
            heartImg.src = '../img/empty-heart.svg';
        }
    };
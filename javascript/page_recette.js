function fillHeart() {
    var currentImg = document.getElementById("likeimg").src;
        if (currentImg.endsWith("img/empty-heart.svg")){
            //currentImg.src = "../img/filled-heart.svg"; ça marche po
            document.getElementById("likeimg").setAttribute("src","../img/filled-heart.svg");
        } else {
            // currentImg.src = "../img/empty-heart.svg"; ça marche po
            document.getElementById("likeimg").setAttribute("src","../img/empty-heart.svg");
        }
    };

// notation étoiles
window.onload = () => {
    const stars = document.querySelectorAll(".fi-rs-star"); // on récupère les étoiles

    for(star of stars){
        star.addEventListener("mouseover", function(){
            resetStars();
            this.classList.add("fi-ss-star");
            this.classList.remove("fi-rs-star");
            let previousStar = this.previousElementSibling;

            while(previousStar){
            previousStar.classList.add("fi-ss-star");
            previousStar.classList.remove("fi-rs-star");
            previousStar = previousStar.previousElementSibling;
            };
        })
    };

    function resetStars(){
        for(star of stars){
            star.classList.add("fi-rs-star");
            star.classList.remove("fi-ss-star");
        }
    }
};
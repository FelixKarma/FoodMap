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

    const note = document.querySelector("#note");

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

    function resetStars(note = 0){
        for(star of stars){
            if(star.dataset.value > note){
            star.classList.add("fi-rs-star");
            star.classList.remove("fi-ss-star");
            
            }
            else {
            star.classList.add("fi-ss-star");
            star.classList.remove("fi-rs-star");
            }
        }
    }

    //écoute du clic
    star.addEventListener("click", function(){
        note.value = this.dataset.value;
    });

    star.addEventListener("mouseout", function(){
        resetStars(note.value);
    });
};

//affichage moyenne

/*let moy = document.getElementById("moyenne");
let myMoy = document.createElement('p');
myMoy.innerText = "Moy."+note.value;
moy.append(myMoy);*/

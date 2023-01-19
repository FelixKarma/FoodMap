const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;

function setIndex() {
    document.querySelector('.controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -14.28 + '%)';
}

document.querySelectorAll('.controls li').forEach(function (indicator, ind) {
    indicator.addEventListener('click', function () {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    });
});

leftArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    indicatorParents.children[sectionIndex].classList.add('selected');
    setIndex();
});

rightArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex < 6) ? sectionIndex + 1 : 6;
    indicatorParents.children[sectionIndex].classList.add('selected');
    setIndex();
});



//                                              Essai n°1



// let search = document.getElementById("search");


// function UrlExists(url) {
//     var http = new XMLHttpRequest();
//     http.open('HEAD', url, false);
//     http.send();
//     if (http.status != 404)
//         return true;
//     else
//         return false;
// }

// search.addEventListener("keypress", function (event) {
//     var a = document.getElementById("search").value;
    
//     if (event.key === "Enter") {
//         var url = document.location.assign("recette " + a + ".html");
//         if (a !== null && a !== "") {
//             if(UrlExists(url) == true){
//                 document.location.assign("recette " + a + ".html");
//             } else {
//                 document.location.href = "404.html";
//             } 
//         }
//     }
// })



//                                                      Essai n°2



// Index recettes

let recettes = ["falafel", "fricassé", "tiramisu"];

// Annonce variables i = 1 valeur du tableau, recherche = mot entré (id "search" de la barre de recherche), reponse = resultat si i = recherche

let i, recherche, reponse

// Récupération du mot recherché

recherche = document.getElementById("search").value.toUpperCase();

// i = 1 des éléments du tableau

i = document.getElementById("recettes");

i = recettes.getElementByTagName("");
//








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



//                                                     Essai n°3




// Index recettes

const recettes = ["falafel", "fricassé", "tiramisu"];



const reponse = recettes.filter(recommandation => recommandation.value == "search");



//                                                  Essai final (exo) ? 



// Index recettes

let recettes = ["falafel", "fricassé", "tiramisu"];

// Récupération du mot recherché

let search = document.getElementById("search");

search.addEventListener("keydown", function (event) {

    // Recherche = mot entré (id "search" de la barre de recherche), reponse = resultat
    let recherche = document.getElementById("search").value.toLowerCase();
    let reponse;

    //Detection de la touche entrée
   
        //Parcours le tableau recettes grace à for of
            //On compare la recherche avec les différents éléments du tableau

                //On redirige vers la page recherchée si trouvée

                //On passe reponse à true pour dire que c'est bon
                
                //On break pour casser la boucle for, au cas où on a plusieurs éléments dans le tableau après le resultat trouvé
               
        //On check enfin si la reponse est false pour renvoyer vers 404
        
    
})








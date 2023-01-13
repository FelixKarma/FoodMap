let compteur =0;
let compteurtag = 0;


// Ajout d'ingrédients
function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var newInput = document.getElementById("new-ingredient").value;
    
    // Afficher la valeur
    console.log(newInput);
    if(newInput != ""){

        const ingredientsTest = document.getElementById("ingredients-test");
        const ingredientsTest2 = document.getElementById("ingredients2-test");
        
        // dans le bouton
        let newDiv = document.createElement('div');
        newDiv.classList.add('small-frame');
        newDiv.classList.add(`supp`+compteur);
        let newIng = document.createElement('p');
        newIng.innerText = newInput;
        newDiv.append(newIng);
        ingredientsTest.append(newDiv);
        
        //à l'intérieur de la boite modale
        let newDiv2 = document.createElement('div');
        newDiv2.classList.add('frame');
        newDiv2.classList.add(`supp`+compteur);
        let newIng2 = document.createElement('p');
        newIng2.innerText = newInput;
        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete-ing');
        buttonDelete.setAttribute('onclick', `deleteIng(${compteur})`);
        let deleteImg = document.createElement('img');
        deleteImg.src = '../img/delete.svg';
        newDiv2.append(newIng2);
        buttonDelete.append(deleteImg);
        newDiv2.append(buttonDelete);
        ingredientsTest2.append(newDiv2);
        compteur++;
    }
}



function deleteIng(id){
    var ingToDelete = document.querySelectorAll(`.supp`+id);
    for (const item of ingToDelete) {
        item.remove();
    }
}


//Ajout de filtres
function getTagValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var newTag = document.getElementById("new-filter").value;
    
    // Afficher la valeur
    if(newTag != ""){

        const tagTest = document.getElementById("tag-test");
        const tagTest2 = document.getElementById("tag2-test");
        
        // dans le bouton
        let newTagDiv = document.createElement('div');
        newTagDiv.classList.add('small-frame');
        newTagDiv.classList.add(`supptag`+compteurtag);
        let filter = document.createElement('p');
        filter.innerText = newTag;
        newTagDiv.append(filter);
        tagTest.append(newTagDiv);
        
        //à l'intérieur de la boite modale
        let newTagDiv2 = document.createElement('div');
        newTagDiv2.classList.add('frame');
        newTagDiv2.classList.add(`supptag`+compteurtag);
        let filter2 = document.createElement('p');
        filter2.innerText = newTag;
        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete-tag');
        buttonDelete.setAttribute('onclick', `deleteTag(${compteurtag})`);
        let deleteImg = document.createElement('img');
        deleteImg.src = '../img/delete.svg';
        newTagDiv2.append(filter2);
        buttonDelete.append(deleteImg);
        newTagDiv2.append(buttonDelete);
        tagTest2.append(newTagDiv2);
        compteurtag++;
    }
}



function deleteTag(idtag){
    var tagToDelete = document.querySelectorAll(`.supptag`+idtag);
    for (const itag of tagToDelete) {
        itag.remove();
    }
}

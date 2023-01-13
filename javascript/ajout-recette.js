let compteur =0;

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

function resetDefaultValue(){
    document.getElementById("new-ingredient").reset();
};

function deleteIng(id){
    var ingToDelete = document.querySelectorAll(`.supp`+id);
    for (const item of ingToDelete) {
        item.remove();
    }
}

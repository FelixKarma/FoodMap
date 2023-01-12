function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("new-ingredient").value;

    // Afficher la valeur
    console.log(input);

    const ingredientsTest = document.getElementById("ingredients-test");
    const ingredientsTest2 = document.getElementById("ingredients2-test");

    
    let newDiv = document.createElement('div');
    newDiv.classList.add('small-frame');
    let newIng = document.createElement('p');
    newIng.innerText = input;
    newDiv.append(newIng);
    ingredientsTest.append(newDiv);

    let newDiv2 = document.createElement('div');
    newDiv2.classList.add('frame');
    let newIng2 = document.createElement('p');
    newIng2.innerText = input;
    let buttonDelete = document.createElement('button');
    let deleteImg = document.createElement('img');
    deleteImg.src = '../img/delete.svg';
    newDiv2.append(newIng2);
    buttonDelete.append(deleteImg);
    newDiv2.append(buttonDelete);
    ingredientsTest2.append(newDiv2);

}
function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("new-ingredient").value;

    // Afficher la valeur
    console.log(input);

    const ingredientsTest = document.getElementById("ingredients-test");
    const ingredientsTest2 = document.getElementById("ingredients2-test");

    
    let newDiv = document.createElement('div');
    newDiv.classList.add('frame');
    let newIng = document.createElement('p');
    newIng.innerText = input;
    newDiv.append(newIng);
    ingredientsTest.append(newDiv);

    let newDiv2 = document.createElement('div');
    newDiv2.classList.add('frame');
    let newIng2 = document.createElement('p');
    newIng2.innerText = input;
    newDiv2.append(newIng2);
    ingredientsTest2.append(newDiv2);

}
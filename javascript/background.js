

switch (localStorage.getItem('theme')) {
    case "theme1": document.body.style.background = 'linear-gradient(rgb(255, 165, 0), rgb(255, 0, 0))';
        break;
    case "theme2": document.body.style.backgroundImage = 'url("../img/bois1.jpg")';
        break;
    case "theme3": document.body.style.background = 'red';
        break;
    case "theme4": document.body.style.background = 'linear-gradient(rgb(236, 100, 8), rgb(151, 75, 255))';
        break;
    default: document.body.style.background = 'linear-gradient(rgb(236, 183, 141), rgb(236, 100, 8))';
        break;
}
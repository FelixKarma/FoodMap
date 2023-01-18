const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -14.28 + '%)';
});

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 6) ? sectionIndex + 1 : 6;
    slider.style.transform = 'translate(' + (sectionIndex) * -14.28 + '%)';
});
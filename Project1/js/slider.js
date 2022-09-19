let prev = document.getElementById('prevButton');
let next = document.getElementById('nextButton');
let sliderList = document.querySelector('.slider__list');
let slide = document.querySelectorAll('.slider__slide')[0];
let sliderQuantity = document.querySelectorAll('.slider__slide').length;
console.log(slide);

let listWidth = sliderList.offsetWidth;
let slideWidth = slide.offsetWidth;
let minLeft = 0;
let maxLeft = (slideWidth * sliderQuantity) - slideWidth;

console.log(slideWidth)

let counter = 0;
sliderList.style.left = counter;

function checkButtons() {
    if (counter > minLeft && !next.classList.contains('slider__button--active')) {
        next.classList.add('slider__button--active')
    } else if (counter < maxLeft && !prev.classList.contains('slider__button--active')) {
        prev.classList.add('slider__button--active')
    } else if (counter === maxLeft && next.classList.contains('slider__button--active')) {
        next.classList.remove('slider__button--active')
    } else if (counter === minLeft && prev.classList.contains('slider__button--active')) {
        prev.classList.remove('slider__button--active')
    }
}

prev.addEventListener('click', e => {
    if (counter > minLeft){
        counter -= slideWidth;
        sliderList.style.left = '-' + counter + 'px';
        checkButtons();
    }
})

next.addEventListener('click', e => {
    if (counter < maxLeft){
        counter += slideWidth;
        sliderList.style.left = '-' + counter + 'px';
        checkButtons();
    }
})

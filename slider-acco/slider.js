const back = document.getElementById('backButton')
const next = document.getElementById('nextButton')
const tape = document.querySelector('.slider__tape')
const slide = document.querySelector('.slider__slide')
const step = slide.offsetWidth;
var currentStep = 0;
const maxWidth = tape.offsetWidth;



back.addEventListener('click', e=> {
    e.preventDefault();
    if ((currentStep * -1) > 0){
        currentStep += step;
    }
    tape.style.transform = `translateX(${currentStep}px)`;
})

next.addEventListener('click', e=> {
    e.preventDefault();
    if ((currentStep * -1) < maxWidth - step){
        currentStep -= step;
    }
    tape.style.transform = `translateX(${currentStep}px)`;
})
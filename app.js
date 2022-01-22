// pages
const step1Page = document.querySelector('.step1');
const step2Page = document.querySelector('.step2');
const step3Page = document.querySelector('.step3');
const step4Page = document.querySelector('.step4');
const step5Page = document.querySelector('.step5');
const step6Page = document.querySelector('.step6');

// next buttons
const step1NextButton = document.querySelector('.step1__button');
const step2NextButton = document.querySelector('.step2__button');
const step3NextButton = document.querySelector('.step3__button');
const step4NextButton = document.querySelector('.step4__button');
const step5NextButton = document.querySelector('.step5__button');

// close button
const closeButton = document.querySelector('page__close');

// first countdown



// functions

const nextPage1 = function() {
    step1Page.classList.add('hide');
    step2Page.classList.toggle('hide');
}
const nextPage2 = function() {
    step2Page.classList.toggle('hide');
    step3Page.classList.toggle('hide');
}
const nextPage3 = function() {
    step3Page.classList.toggle('hide');
    step4Page.classList.toggle('hide');
}
const nextPage4 = function() {
    step4Page.classList.toggle('hide');
    step5Page.classList.toggle('hide');
}
const nextPage5 = function() {
    step5Page.classList.toggle('hide');
    step6Page.classList.toggle('hide');
}



// Add event listeners

step1NextButton.addEventListener('click', nextPage1)
step2NextButton.addEventListener('click', nextPage2)
step3NextButton.addEventListener('click', nextPage3)
step4NextButton.addEventListener('click', nextPage4)
step5NextButton.addEventListener('click', nextPage5)


// pages
const step1Page = document.querySelector(".step1");
const step2Page = document.querySelector(".step2");
const step3Page = document.querySelector(".step3");
const step4Page = document.querySelector(".step4");
const step5Page = document.querySelector(".step5");
const step6Page = document.querySelector(".step6");

// next buttons
const step1NextButton = document.querySelector(".step1__button");
const step2NextButton = document.querySelector(".step2__button");
const step3NextButton = document.querySelector(".step3__next");
const step4NextButton = document.querySelector(".step4__next");
const step5NextButton = document.querySelector(".step5__next");

// close button
const closeButton = document.querySelector("page__close");

// first countdown |step3
const step3Timer = document.querySelector(".step3__timer");
const step3Start = document.querySelector(".step3__start");
const step3Reset = document.querySelector(".step3__reset");
const step3Next = document.querySelector(".step3__next");

// second countdown |step4
const step4Timer = document.querySelector(".step4__timer");
const step4Start = document.querySelector(".step4__start");
const step4Reset = document.querySelector(".step4__reset");
const step4Next = document.querySelector(".step4__next");

// second countdown |step5
const step5Timer = document.querySelector(".step5__timer");
const step5Start = document.querySelector(".step5__start");
const step5Reset = document.querySelector(".step5__reset");
const step5Next = document.querySelector(".step5__next");


// next page functions
const nextPage1 = function () {
    step1Page.classList.add("hide");
    step2Page.classList.toggle("hide");
};
const nextPage2 = function () {
    step2Page.classList.toggle("hide");
    step3Page.classList.toggle("hide");
};
const nextPage3 = function () {
    step3Page.classList.toggle("hide");
    step4Page.classList.toggle("hide");
};
const nextPage4 = function () {
    step4Page.classList.toggle("hide");
    step5Page.classList.toggle("hide");
};
const nextPage5 = function () {
    step5Page.classList.toggle("hide");
    step6Page.classList.toggle("hide");
};

// step3 countdown function
const startingMinutesStep3 = 0.1;
let timeStep3 = startingMinutesStep3 * 60;

const updateCountdownStep3 = function () {
    const minutesStep3 = Math.floor(timeStep3 / 60);
    let secondsStep3 = timeStep3 % 60;
    
    step3Timer.innerHTML = `${minutesStep3}: ${secondsStep3} s`;
    timeStep3--;
    
    if (timeStep3 < 0) {
        timeStep3 = 0;
        step3Reset.classList.add('hide')
        step3Next.classList.remove('hide')
    }
}
const step3Countdown = function () {
    step3Start.classList.add('hide');
    step3Reset.classList.remove('hide');
    const step3Interval = setInterval(updateCountdownStep3, 1000);
    
    step3Reset.addEventListener('click', function(){
        timeStep3 = startingMinutesStep3 * 60;
        step3Timer.innerHTML = `0: 30 s`;
        clearTimeout(step3Interval);
        step3Reset.classList.add('hide');
        step3Start.classList.remove('hide');
    })

};
step3Start.addEventListener("click", step3Countdown);

// step4 countdown function

const startingMinutesStep4 = 0.1;
let timeStep4 = startingMinutesStep4 * 60;

const updateCountdownStep4 = function () {
    const minutesStep4 = Math.floor(timeStep4 / 60);
    let secondsStep4 = timeStep4 % 60;
    
    step4Timer.innerHTML = `${minutesStep4}: ${secondsStep4}s`;
    timeStep4--;
    
    if (timeStep4 < 0) {
        timeStep4 = 0;
        step4Reset.classList.add('hide')
        step4Next.classList.remove('hide')
    }
}

const step4Countdown = function () {
    step4Start.classList.add('hide');
    step4Reset.classList.remove('hide');
    const step4Interval = setInterval(updateCountdownStep4, 1000);


    step4Reset.addEventListener('click', function(){
        timeStep4 = startingMinutesStep4 * 60;
        step4Timer.innerHTML = `1: 30 s`;
        clearTimeout(step4Interval);
        step4Reset.classList.add('hide');
        step4Start.classList.remove('hide');
    })


};
step4Start.addEventListener("click", step4Countdown);

// Step5 countdown function

const startingMinutesStep5 = 0.25;
let timeStep5 = startingMinutesStep5 * 60;

const updateCountdownStep5 = function () {
    const minutesStep5 = Math.floor(timeStep5 / 60);
    let secondsStep5 = timeStep5 % 60;
    
    step5Timer.innerHTML = `${minutesStep5}: ${secondsStep5} s`;
    timeStep5--;
    
    if (timeStep5 < 0) {
        timeStep5 = 0;
        step5Reset.classList.add('hide')
        step5Next.classList.remove('hide')
    }
}
const step5Countdown = function () {
    step5Start.classList.add('hide');
    step5Reset.classList.remove('hide');
    const step5Interval = setInterval(updateCountdownStep5, 1000);
    
    step5Reset.addEventListener('click', function(){
        timeStep5 = startingMinutesStep5 * 60;
        step5Timer.innerHTML = `0: 15 s`;
        clearTimeout(step5Interval);
        step5Reset.classList.add('hide');
        step5Start.classList.remove('hide');
    })

};
step5Start.addEventListener("click", step5Countdown);




// Next page Add event listeners
step1NextButton.addEventListener("click", nextPage1);
step2NextButton.addEventListener("click", nextPage2);
step3NextButton.addEventListener("click", nextPage3);
step4NextButton.addEventListener("click", nextPage4);
step5NextButton.addEventListener("click", nextPage5);



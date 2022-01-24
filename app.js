// pages
const step1Page = document.querySelector(".step1");
const step2Page = document.querySelector(".step2");
const step3Page = document.querySelector(".step3");
const step4Page = document.querySelector(".step4");
const step5Page = document.querySelector(".step5");
const step6Page = document.querySelector(".step6");

const statisticsPage = document.querySelector(".statistics");

const modalPage = document.querySelector(".modal");
// next buttons
const step1NextButton = document.querySelector(".step1__button");
const step2NextButton = document.querySelector(".step2__button");
const step3NextButton = document.querySelector(".step3__next");
const step4NextButton = document.querySelector(".step4__next");
const step5NextButton = document.querySelector(".step5__next");

// left arrows
const step2LeftArrow = document.querySelector(".step2__left");
const step3LeftArrow = document.querySelector(".step3__left");
const step4LeftArrow = document.querySelector(".step4__left");
const step5LeftArrow = document.querySelector(".step5__left");
// right arrows
const step2RightArrow = document.querySelector(".step2__right");
const step3RightArrow = document.querySelector(".step3__right");
const step4RightArrow = document.querySelector(".step4__right");
const step5RightArrow = document.querySelector(".step5__right");

// close button
const closeButtons = document.querySelectorAll(".page__close");
// modal buttons 
const modalCloseBtn = document.querySelector('.modal__close');
const modalAcceptBtn = document.querySelector('.modal__accept');
const modalCancelBtn = document.querySelector('.modal__cancel');
// homeButton
const homeButton = document.querySelector(".home");
// statistics button
const statsButton = document.querySelector(".page__statistic");
// statistic sections
const monthlyBox = document.querySelector(".statistics__monthly");
const yearlyBox = document.querySelector(".statistics__yearly");
// statistics section buttons
const monthlyButton = document.querySelector(".monthly__button");
const yearlyButton = document.querySelector(".yearly__button");
// statistics close button 
const closeStatistics = document.querySelector(".statistics__close");
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
    step3Reset.classList.add("hide");
    step3Next.classList.remove("hide");
  }
};
const step3Countdown = function () {
  step3Start.classList.add("hide");
  step3Reset.classList.remove("hide");
  const step3Interval = setInterval(updateCountdownStep3, 1000);

   const clearStep3Countdown = function (){
    timeStep3 = startingMinutesStep3 * 60;
    step3Timer.innerHTML = `0: 30 s`;
    clearTimeout(step3Interval);
    step3Reset.classList.add("hide");
    step3Start.classList.remove("hide");
   }

  step3Reset.addEventListener("click", clearStep3Countdown);
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
    step4Reset.classList.add("hide");
    step4Next.classList.remove("hide");
  }
};

const step4Countdown = function () {
  step4Start.classList.add("hide");
  step4Reset.classList.remove("hide");
  const step4Interval = setInterval(updateCountdownStep4, 1000);

  const clearStep4Countdown = function () {

    timeStep4 = startingMinutesStep4 * 60;
    step4Timer.innerHTML = `1: 30 s`;
    clearTimeout(step4Interval);
    step4Reset.classList.add("hide");
    step4Start.classList.remove("hide");


  }

  step4Reset.addEventListener("click", clearStep4Countdown);
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
    step5Reset.classList.add("hide");
    step5Next.classList.remove("hide");
  }
};
const step5Countdown = function () {
  step5Start.classList.add("hide");
  step5Reset.classList.remove("hide");
  const step5Interval = setInterval(updateCountdownStep5, 1000);

  const clearStep5Countdown = function () {

    timeStep5 = startingMinutesStep5 * 60;
    step5Timer.innerHTML = `0: 15 s`;
    clearTimeout(step5Interval);
    step5Reset.classList.add("hide");
    step5Start.classList.remove("hide");

  }

  step5Reset.addEventListener("click", clearStep5Countdown);
};
step5Start.addEventListener("click", step5Countdown);

// previous page functions
step2PreviousPage = () => {
  step2Page.classList.toggle("hide");
  step1Page.classList.toggle("hide");
};
step3PreviousPage = () => {
  step3Page.classList.toggle("hide");
  step2Page.classList.toggle("hide");
};
step4PreviousPage = () => {
  step4Page.classList.toggle("hide");
  step3Page.classList.toggle("hide");
};
step5PreviousPage = () => {
  step5Page.classList.toggle("hide");
  step4Page.classList.toggle("hide");
};
step6PreviousPage = () => {
  step6Page.classList.toggle("hide");
  step1Page.classList.toggle("hide");
};
statisticsPreviousPage = () => {
  statisticsPage.classList.toggle('hide');
  step1Page.classList.toggle("hide");
}

// next page functions
const nextPage1 = function () {
  step1Page.classList.add("hide");
  step2Page.classList.toggle("hide");
  setStartingData();
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
  addStats(year, month);
};

// show modal component

closeButtons.forEach(btn => {
  btn.addEventListener('click', ()=> {
    modalPage.classList.toggle('hide')
  })
})

// modal component functions
const closeModal = function () {
  modalPage.classList.toggle('hide')
};
// modal go home button hunction
const modalHome = function(){
  location.reload()
}

// Statistics functions

const showStatistics = function () {
  step1Page.classList.toggle("hide");
  statisticsPage.classList.toggle("hide");
  updateMonthlyStats();

  total2022.innerHTML = updateYearlyStats(2022);
  total2023.innerHTML = updateYearlyStats(2023);
  total2024.innerHTML = updateYearlyStats(2024);
  total2025.innerHTML = updateYearlyStats(2025);
};

const showMonthlyStats = function () {
    yearlyBox.classList.toggle('hide');
    monthlyBox.classList.toggle('hide');
    monthlyButton.classList.toggle('underline');
    yearlyButton.classList.toggle('underline')
}
const showYearlyStats = function () {
    monthlyBox.classList.toggle('hide');
    yearlyBox.classList.toggle('hide');
    monthlyButton.classList.toggle('underline');
    yearlyButton.classList.toggle('underline')
}



// Setting curent date
const current = new Date();
const month = current.toLocaleString("en-US", { month: "long" });
const year = current.getFullYear();

// Setting starting localstorage
const setStartingData = () => {
  // check if localstorage exist
  if (localStorage.getItem(year) == null) {
    // if localstorage doesn't exist - create new objects
    const stats2022 = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0,
    };
    const stats2023 = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0,
    };
    const stats2024 = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0,
    };
    const stats2025 = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0,
    };

    localStorage.setItem("2022", JSON.stringify(stats2022));
    localStorage.setItem("2023", JSON.stringify(stats2023));
    localStorage.setItem("2024", JSON.stringify(stats2024));
    localStorage.setItem("2025", JSON.stringify(stats2025));
  }
};

// Add new stats

const addStats = function (currYear, currMonth) {
  // Create new empty string
  let stats = "";
  // catch correct year object from localstorage and save it as stats
  stats = JSON.parse(localStorage.getItem(currYear));
  // add monthly stats
  stats[currMonth]++;
  // Save updated stats in localstorage
  localStorage.setItem(currYear, JSON.stringify(stats));
};

// Show monthly statistics
const stats01 = document.querySelector(".statistics__january");
const stats02 = document.querySelector(".statistics__february");
const stats03 = document.querySelector(".statistics__march");
const stats04 = document.querySelector(".statistics__april");
const stats05 = document.querySelector(".statistics__may");
const stats06 = document.querySelector(".statistics__june");
const stats07 = document.querySelector(".statistics__july");
const stats08 = document.querySelector(".statistics__august");
const stats09 = document.querySelector(".statistics__september");
const stats10 = document.querySelector(".statistics__october");
const stats11 = document.querySelector(".statistics__november");
const stats12 = document.querySelector(".statistics__december");
const updateMonthlyStats = function () {
  let localStats = JSON.parse(localStorage.getItem(year));

  stats01.innerHTML = localStats.January;
  stats02.innerHTML = localStats.February;
  stats03.innerHTML = localStats.March;
  stats04.innerHTML = localStats.April;
  stats05.innerHTML = localStats.May;
  stats06.innerHTML = localStats.June;
  stats07.innerHTML = localStats.July;
  stats08.innerHTML = localStats.August;
  stats09.innerHTML = localStats.September;
  stats10.innerHTML = localStats.October;
  stats11.innerHTML = localStats.November;
  stats12.innerHTML = localStats.December;
};

// Show yearly statistics
const total2022 = document.querySelector(".statistics__2022");
const total2023 = document.querySelector(".statistics__2023");
const total2024 = document.querySelector(".statistics__2024");
const total2025 = document.querySelector(".statistics__2025");

const  updateYearlyStats = function (currYear) {
  let localStats = JSON.parse(localStorage.getItem(currYear));
  let total = 0;
  for (let value in localStats) {
    total += localStats[value];
  }
  return total;
};
// Count all stats
const allStats = function () {
    
}


// Next page Add event listeners
step1NextButton.addEventListener("click", nextPage1);
step2NextButton.addEventListener("click", nextPage2);
step3NextButton.addEventListener("click", nextPage3);
step4NextButton.addEventListener("click", nextPage4);
step5NextButton.addEventListener("click", nextPage5);

// Footer next page buttons
step2RightArrow.addEventListener("click", nextPage2);
step3RightArrow.addEventListener("click", nextPage3);
step4RightArrow.addEventListener("click", nextPage4);
step5RightArrow.addEventListener("click", nextPage5);

// Footer previous page button

step2LeftArrow.addEventListener("click", step2PreviousPage);
step3LeftArrow.addEventListener("click", step3PreviousPage);
step4LeftArrow.addEventListener("click", step4PreviousPage);
step5LeftArrow.addEventListener("click", step5PreviousPage);
// Step 6 home button
homeButton.addEventListener("click", step6PreviousPage);

// Statistics open button
statsButton.addEventListener("click", showStatistics);
// Statistics sections buttons
monthlyButton.addEventListener("click", showMonthlyStats);
yearlyButton.addEventListener("click", showYearlyStats);
// Statistics close button
closeStatistics.addEventListener("click", statisticsPreviousPage);
// Modal component close buttons
modalCancelBtn.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);

modalAcceptBtn.addEventListener('click', modalHome)

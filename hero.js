const findElement = selector => document.querySelector(selector);

const burgerButton = findElement('.hero-burger');
const container = findElement('.hero-container');

const containerLeftPart = findElement('.hero-wrapper-left');
const containerRightPart = findElement('.hero-wrapper-right');

const heroHeading = findElement('.hero-heading');
const heroSmallImg = findElement('.hero-small-img');

const leftThreeCell = findElement('.hero-left-cell-three');
const aboutUsLink = findElement('.nav-about-us');
const from2010Text = findElement('.hero-since');

const leftFourCell = findElement('.hero-left-cell-four');
const projectsLink = findElement('.nav-projects');

const rightThreeCell = findElement('.hero-right-cell-three');
const teamLink = findElement('.nav-team');

const rightFourCell = findElement('.hero-right-cell-four');
const resultsLink = findElement('.nav-results');

let isBurgerOpened = false;

function switchState() {
  isBurgerOpened = !isBurgerOpened;
};

function actualizeByState() {
  if (isBurgerOpened) {
    container.classList.add('opened-nav-background');
    containerLeftPart.classList.add('transparent-background');

    heroHeading.classList.add('hidden');
    heroSmallImg.classList.add('hidden');

    aboutUsLink.classList.remove('hidden');
    from2010Text.classList.add('hidden');
    leftThreeCell.classList.add('blurrable');

    projectsLink.classList.remove('hidden');
    leftFourCell.classList.add('blurrable');

    teamLink.classList.remove('hidden');
    rightThreeCell.classList.add('blurrable');

    resultsLink.classList.remove('hidden');
    rightFourCell.classList.add('blurrable');
  } else {
    container.classList.remove('opened-nav-background');
    containerLeftPart.classList.remove('transparent-background');

    heroHeading.classList.remove('hidden');
    heroSmallImg.classList.remove('hidden');

    aboutUsLink.classList.add('hidden');
    from2010Text.classList.remove('hidden');
    leftThreeCell.classList.remove('blurrable');

    projectsLink.classList.add('hidden');
    leftFourCell.classList.remove('blurrable');

    teamLink.classList.add('hidden');
    rightThreeCell.classList.remove('blurrable');

    resultsLink.classList.add('hidden');
    rightFourCell.classList.remove('blurrable');
  };
};

burgerButton.addEventListener('click', function() {
  switchState();
  actualizeByState();
});

actualizeByState();

// document.addEventListener('click', function(event) {
//   if (event.target.offsetParent == container) {
//     return;
//   } else {
//     isBurgerOpened = false;
//     actualizeByState();
//   };
// });

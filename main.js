const entry = document.querySelector('.hero-entry')
const avatar = document.querySelector('.hero-entry-avatar')
const login = document.querySelector('.popup-wrapper')
const cross = document.querySelector('.login-cross')
const formBtn = document.querySelector('.form-btn')

actualizeHeroButtons()

entry.addEventListener('click', function(e) {
  login.classList.toggle('active-popup');
});

cross.addEventListener('click', function(e) {
  login.classList.remove('active-popup');
});

formBtn.addEventListener('click', function(e) {
  e.preventDefault();

  const email = e.currentTarget.form[0].value;
  const password = e.currentTarget.form[1].value;

  if (email === "" || password === "") {
    return
  } else {
    window.localStorage.setItem("email", email);
    login.classList.remove('active-popup');
    actualizeHeroButtons();
  }
})

avatar.addEventListener('click', function(e) {
  window.localStorage.removeItem("email");
  actualizeHeroButtons();
})

document.addEventListener('click', function(e) {
  if(e.target === login) {
    login.classList.remove('active-popup');
  }
})

function actualizeHeroButtons() {
  if (window.localStorage.getItem("email") === null) {
    entry.classList.remove('hidden');
    avatar.classList.add('hidden');
  } else {
    entry.classList.add('hidden');
    avatar.classList.remove('hidden');
  };
};


const dot = document.querySelectorAll('.slider-pagination-dot');
const slide = document.querySelectorAll('.slider-slide');

dot.forEach(function(element){
  element.addEventListener('click', function(e){
    e.target.blur();
    const path = e.currentTarget.dataset.path;

    dot.forEach(function(btn){ btn.classList.remove('slider-pagination-dot--active')});
    e.currentTarget.classList.add('slider-pagination-dot--active');

    slide.forEach(function(element){ element.classList.remove('slider-slide--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('slider-slide--active');
  });
});

const filter = document.querySelector('.projects-filter');
const modal = document.querySelector('.modal');

filter.addEventListener('click', function() {
  modal.classList.toggle('modal--active');
});


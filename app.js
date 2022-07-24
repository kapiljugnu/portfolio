const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content')

function pageTransitions() {
  for (let i = 0; i < sectionBtn.length; i++) {
    sectionBtn[i].addEventListener('click', function click() {
      const currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    });
  }
}

pageTransitions();
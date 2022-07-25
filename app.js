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

  allSection.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // // remove selected from the other btns
      // sectionBtns.forEach((btn) => {
      //   btn.classList.remove('active');
      // });
      // e.target.classList.add('active');

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const el = document.getElementById(id);
      el.classList.add('active');
    }
  });
}

pageTransitions();
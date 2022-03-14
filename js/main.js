// 1. aboutme 페이지 백그라운드 이벤트
const about = document.querySelector('.about');
const background = document.querySelector('.background');

window.addEventListener('scroll', checkPosition);
window.addEventListener('load', checkPosition);
window.addEventListener('resize', checkPosition);

function checkPosition() {
  let innerHeight = window.innerHeight;
  let aboutTop = about.getBoundingClientRect().top;

  if (innerHeight > aboutTop + 300) {
    background.style.opacity = '1';
  }
}

// 2. projects 버튼 클릭 시 해당 페이지로 이동
const projects = document.querySelector('.projects');
const btnArr = projects.getElementsByTagName('button');
for (let i = 0; i < btnArr.length; i++) {
  btnArr[i].addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.box' + (i + 1)).scrollIntoView(true);
  });
}

//3. work페이지부터 projects로 돌아갈 수 있는 버튼
const todolist = document.querySelector('.todolist');
const projectsBtn = document.querySelector('.projects-btn');

window.addEventListener('scroll', workCheckPosition);
window.addEventListener('load', workCheckPosition);
window.addEventListener('resize', workCheckPosition);

function workCheckPosition() {
  const timer = document.querySelector('.timer');
  let timerTop = timer.getBoundingClientRect().top;

  if (timerTop < 1) {
    projectsBtn.style.visibility = 'visible';
  } else {
    projectsBtn.style.visibility = 'hidden';
  }

  projectsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    projects.scrollIntoView(true);
    body.style.overflow = 'auto';
    body.style.touchAction = 'pan-y';
    modalBody.style.visibility = 'hidden';
    modalWindow.style.visibility = 'hidden';
  });
}

const memoji = document.querySelector('.about__memoji');
memoji.addEventListener('mouseover', () => {
  setTimeout(() => {
    memoji.setAttribute('src', 'img/memoji2.svg');
    setTimeout(() => {
      memoji.setAttribute('src', 'img/memoji3.svg');
      setTimeout(() => {
        memoji.setAttribute('src', 'img/memoji.svg');
      }, 1500);
    }, 1500);
  }, 1500);
});
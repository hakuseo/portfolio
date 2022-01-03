// timer, todolist hover here 화면 띄우기
const timer = document.querySelector('.timer');
const hover = timer.querySelector('.hover-here');
const light = timer.querySelector('.light');
const todolistHover = document.querySelector('.todolist-hover-here');
const todoBasic = document.querySelector('.todo-basic');

window.addEventListener('scroll', checkPosition);
window.addEventListener('load', checkPosition);
window.addEventListener('resize', checkPosition);

function checkPosition() {
  let innerHeight = window.innerHeight;
  let lightTop = light.getBoundingClientRect().top;

  if (innerHeight > lightTop + 300) {
    hover.classList.add('hover-me');
    setTimeout(() => {
      hover.style.opacity = '0';
      setTimeout(() => {
        hover.style.display = 'none';
      }, 500);
    }, 1000);
  }

  let todoBasicTop = todoBasic.getBoundingClientRect().top;
  if (innerHeight > todoBasicTop + 300) {
    todolistHover.classList.add('todolist-hoverme');
    setTimeout(() => {
      todolistHover.style.opacity = '0';
      setTimeout(() => {
        todolistHover.style.display = 'none';
      }, 500);
    }, 1000);
  }
}

// timer, todolist 목업 슬라이드쇼
const slideBtn = document.querySelectorAll('.slide-button');
const array = ['translateX(0%)', 'translateX(-100%)', 'translateX(-200%)'];

slideBtn.forEach((button) =>
  button.addEventListener('click', (e) => {
    const targetEl = button.nextElementSibling;
    if (e.target.tagName === 'BUTTON') {
      for (let i = 0; i < button.children.length; i++) {
        if (e.target === e.target.parentNode.children[i]) {
          targetEl.style.transform = array[i];
          e.target.classList.add('button-opacity');
          if (!e.target.matches('.slide-button')) {
            [...button.children].map((buttonColor) =>
              buttonColor.classList.toggle(
                'button-opacity',
                buttonColor.id === e.target.id,
              ),
            );
          }
        }
      }
    } else {
      return false;
    }
  }),
);

const error = document.querySelector('.error');
const warningWindow = document.querySelector('.warning--window');

error.addEventListener('mouseover', () => {
  warningWindow.classList.add('show');
});

error.addEventListener('mouseout', () => {
  warningWindow.classList.remove('show');
});

// netflix 작업물 자세히보기 버튼
const workDetailBtn = document.querySelector('.work-detail');
const modalBody = document.querySelector('.modal--body');
const exitBtn = document.querySelector('.exit-btn');
const modalWindow = document.querySelector('.modal--window');
const body = document.querySelector('body');

workDetailBtn.addEventListener('click', () => {
  modalBody.style.visibility = 'visible';
  modalWindow.style.visibility = 'visible';
  body.style.overflow = 'hidden';
  body.style.touchAction = 'none';
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modalBody.style.visibility = 'hidden';
    modalWindow.style.visibility = 'hidden';
    body.style.overflow = 'auto';
    body.style.touchAction = 'pan-y';
  }
});

exitBtn.addEventListener('click', () => {
  modalBody.style.visibility = 'hidden';
  modalWindow.style.visibility = 'hidden';
  body.style.overflow = 'auto';
  body.style.touchAction = 'pan-y';
});

modalWindow.addEventListener('click', (e) => {
  if (e.target === modalWindow) {
    modalBody.style.visibility = 'hidden';
    modalWindow.style.visibility = 'hidden';
    body.style.overflow = 'auto';
    body.style.touchAction = 'pan-y';
  } else {
    return false;
  }
});

// 포트폴리오 페이지 애니메이션 적용
const portfolio = document.querySelector('.portfolio');
const portfolioExplain = document.querySelector('.portfolio-explain');
const portfolioLeft = portfolioExplain.querySelector('.left');
const leftBox = document.querySelectorAll('.left--box');
const slideVideo = document.querySelector('.slide-video');

slideVideo.muted = true;
let flag = false;

window.addEventListener('scroll', () => {
  let portfolioExplainTop = portfolioExplain.getBoundingClientRect().top;
  let innerHeight = window.innerHeight;
  if (portfolioExplainTop - innerHeight < -100 && !flag) {
    leftBox.forEach((item) => {
      flag = true;
      item.style.animation = 'slide-top ease-in-out 2000ms 2400ms forwards';
      setTimeout(() => {
        slideVideo.play();
      }, 3500);
    });
  }
});

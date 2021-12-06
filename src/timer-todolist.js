// timer, todolist hover here 화면 띄우기
const timer = document.querySelector('.timer');
const hover = timer.querySelector('.hover');
const light = timer.querySelector('.light');
const todolistHover = document.querySelector('.todolist-hover');
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
const slideContainer = document.querySelectorAll('.slide-container');
const slideBtn = document.querySelectorAll('.slide-button');
const array = ['translateX(0%)', 'translateX(-100%)', 'translateX(-200%)'];

slideBtn.forEach((button) =>
  button.addEventListener('click', (e) => {
    const targetEl = button.previousElementSibling.firstElementChild;
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

exitBtn.addEventListener('click', () => {
  modalBody.style.visibility = 'hidden';
  modalWindow.style.visibility = 'hidden';
  body.style.overflow = 'auto';
  body.style.touchAction = 'pan-y';
});

// hover here
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

// slide show
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

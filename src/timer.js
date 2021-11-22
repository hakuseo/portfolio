// hover here
const hover = document.querySelector('.hover');
const light = document.querySelector('.light');

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
}

// slide show
const container = document.querySelector('.container');
const slideBtn = document.querySelector('.slide-button');
const array = ['translateX(0%)', 'translateX(-100%)', 'translateX(-200%)'];

// setInterval(slideShow, 3000);

let i = 1;
let slideShow = setInterval(function () {
  if (i === 0) {
    clearInterval(slideShow);
  }
  container.style.transform = array[i];
  i++;
  if (i >= slideBtn.children.length) {
    i = 0;
  }
}, 3000);

slideBtn.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'BUTTON') {
      for (let i = 0; i < slideBtn.children.length; i++) {
        if (e.target === e.target.parentNode.children[i]) {
          container.style.transform = array[i];
          e.target.classList.add('button-opacity');
          if (!e.target.matches('.slide-button')) {
            [...slideBtn.children].map((button) =>
              button.classList.toggle(
                'button-opacity',
                button.id === e.target.id,
              ),
            );
          }
        }
      }
    } else {
      return false;
    }
  },

  // [slideBtn.children].map((item) => console.log(item));
  //

  // if (e.target.style.opacity)
);

// hover me
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
        hover.style.zIndex = '-10';
      }, 500);
    }, 1000);
  }
}

document.querySelector('.container').addEventListener('click', function () {
  document.querySelector('.container').style.transform = 'translate(-100%)';
});

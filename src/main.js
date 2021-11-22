const aboutMe = document.querySelector('.about-me');
const background = document.querySelector('.background');

window.addEventListener('scroll', checkPosition);
window.addEventListener('load', checkPosition);
window.addEventListener('resize', checkPosition);

function checkPosition() {
  let innerHeight = window.innerHeight;
  let aboutMeTop = aboutMe.getBoundingClientRect().top;
  let aboutMeBottom = aboutMe.getBoundingClientRect().bottom;
  if (innerHeight > aboutMeTop + 300) {
    background.style.opacity = '1';
  }

  console.log(
    'aboutMeTop, innerHeight,aboutMeBottom',
    aboutMeTop,
    innerHeight,
    aboutMeBottom,
  );
}

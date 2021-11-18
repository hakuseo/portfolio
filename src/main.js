const aboutMe = document.querySelector('.about-me');
const background = document.querySelector('.background');

window.addEventListener('scroll', checkPosition);
window.addEventListener('load', checkPosition);
window.addEventListener('resize', windowHeight);

function windowHeight() {
  let innerHeight = window.innerHeight;
  console.log(innerHeight);
}

function checkPosition() {
  let aboutMeTop = aboutMe.getBoundingClientRect().top;
  let aboutMeBottom = aboutMe.getBoundingClientRect().bottom;
  if (innerHeight > aboutMeTop + 300) {
    background.style.opacity = '1';
  }
  // if (innerHeight > aboutMeTop) {
  //   aboutMe.style.position = 'sticky';
  //   aboutMe.style.top = '0';
  //   aboutMe.style.left = '0';
  // }

  console.log(
    'aboutMeTop, innerHeight,aboutMeBottom',
    aboutMeTop,
    innerHeight,
    aboutMeBottom,
  );
}

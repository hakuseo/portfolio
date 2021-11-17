// const project = document.querySelector('.project');
// const mini = document.querySelector('.mini');
// const projectContainer = document.querySelector('.projects-container');

// const projectBtom = project.getBoundingClientRect().bottom;
// console.log(projectBtom);

// // window.addEventListener('scroll', () => {
// //   console.log(projectBtom);
// //   console.log(window.scrollY);
// //   if (projectBtom == window.scrollY) {
// //     // projectContainer.style.display = 'none';
// //     mini.style.display = 'flex';
// //   } else if (projectBtom > window.scrollY) {
// //     mini.style.display = 'none';
// //   }
// // });

// const aboutMe = document.querySelector('.about-me');
// console.log(aboutMe);

// let scrollY = window.scrollY;
// let aboutMeTop = aboutMe.getBoundingClientRect().top;
// let absoluteValue = scrollY + aboutMeTop;

// console.log('winH', winH);
// console.log('scrollY', scrollY);
// console.log('aboutMeTop', aboutMeTop);
// console.log('absoluteValue', absoluteValue);

// let addEventHandlers = function () {
//   window.addEventListener('scroll', checkPosition);
//   window.addEventListener('load', checkPosition);
//   window.addEventListener('resize', () => {
//     let winH = window.innerHeight;
//     addEventHandlers();
//     checkPosition(winH);
//   });
// };

// let checkPosition = function (winH) {
//   let aboutMeTop = aboutMe.getBoundingClientRect().top;

//   if (winH > aboutMeTop) {
//     aboutMe.style.backgroundColor = '#FFF';
//   }

//   console.log(winH, aboutMeTop);
// };

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

  if (innerHeight > aboutMeTop + 300) {
    background.style.opacity = '1';
  }

  console.log('aboutMeTop, innerHeight', aboutMeTop, innerHeight);
}

const projects = document.querySelector('.projects');
const projectsTitle = projects.querySelector('.title');
const clock = projects.querySelector('.clock');
const mockUp = projects.querySelector('.mock-up');
const test = document.getElementById('test');
const testContainer = document.querySelector('.test-container');

// window.addEventListener('scroll', function () {
//   checkPosition();
// });

// function checkPosition() {
//   let winH = window.innerHeight;
//   let posFromTop = projectsTitle.getBoundingClientRect().top;

//   if (winH > posFromTop) {
//     clock.className = clock.className.replace('clock', 'active');
//     projectsTitle.className = projectsTitle.className.replace(
//       'title',
//       'fade-in',
//     );
//   }
// }

// window.addEventListener('scroll', () => {
//   let scroll = window.scrollY;
//   const test = document.querySelectorAll('.test');
//   test.forEach((element) => {
//     let speed = element.dataset.speed;
//     element.style.transform = `translateY(${scroll * speed}%)`;
// let a = element.getAttribute('style');
// console.log(a);
// a = a.replace(/[^0-9]/g, '');
// a = a.substr(0, 3);
// console.log(a);
// if(a < 0) {}
//   });
// });

function isElementUnderBottom(item, triggerDiff) {
  const top = item.getBoundingClientRect().top;
  const innerHeight = window.innerHeight;

  return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
  const items = document.querySelectorAll('.up-on-scroll');
  items.forEach((item) => {
    if (isElementUnderBottom(item, 0)) {
      item.style.opacity = '0';
      item.style.transform = 'translateY(200px)';
    } else {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0px)';
    }
  });
}

window.addEventListener('scroll', handleScroll);

// const background = document.querySelector('.landing-page');
// const backgroundHeight = background.getBoundingClientRect().height;
// window.addEventListener('scroll', () => {
//   if (window.scrollY > backgroundHeight) {
//     background.setAttribute('style', 'background: red');
//   } else {
//     background.setAttribute('style', 'background: white');
//   }
// });

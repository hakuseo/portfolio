const projects = document.querySelector('.projects');
const projectsTitle = projects.querySelector('.title');
const clock = projects.querySelector('.clock');
const mockUp = projects.querySelector('.mock-up');
const hand = mockUp.querySelector('img:nth-child(2)');

// let checkPosition = function() {
//   for (let i = 0; i < projectsTitle.length; i++) {
//     if(winH > posFromTop) {
//       projects.classList.add('active');
//     }

//   }
// }
window.addEventListener('scroll', function () {
  checkPosition();
});

function checkPosition() {
  let winH = window.innerHeight;
  let posFromTop = projectsTitle.getBoundingClientRect().top;

  if (winH > posFromTop) {
    clock.className = clock.className.replace('clock', 'active');
    projectsTitle.className = projectsTitle.className.replace(
      'title',
      'fade-in',
    );
  }
}

// window.addEventListener('scroll', () => {
//   let scroll = window.scrollY;
//   console.log(scroll);
//   let winH = window.innerHeight;
//   let posFromTop = hand.getBoundingClientRect().top;
//   console.log(winH, posFromTop);

//   hand.style.transform = translate3d(0px, ${scroll}, 0px)';
//   hand.style.opacity = `${scroll}`;
// });

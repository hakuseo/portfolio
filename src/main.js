const aboutMe = document.querySelector('.about-me');
const background = document.querySelector('.background');

window.addEventListener('scroll', checkPosition);
window.addEventListener('load', checkPosition);
window.addEventListener('resize', checkPosition);

function checkPosition() {
  let innerHeight = window.innerHeight;
  let aboutMeTop = aboutMe.getBoundingClientRect().top;

  if (innerHeight > aboutMeTop + 300) {
    background.style.opacity = '1';
  }
}

const projectsContainer = document.querySelector('.projects-container');
const btnArr = projectsContainer.getElementsByTagName('button');
console.log(btnArr);
for (let i = 0; i < btnArr.length; i++) {
  btnArr[i].addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.box' + (i + 1)).scrollIntoView(true);
  });
}

const list = document.getElementById('.career-llist');
console.log(list.scrollBy);

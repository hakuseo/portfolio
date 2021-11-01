let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //랜덤으로 나오는 알파벳들
let title = 'BASED ON VARIOUS'; //마지막에 뜰 문장
let speed = 30; // ms per frame
let frames = 8; // frames per step. Must be >2

let titleLength = title.length;
let si = 0;
let stri = 0;
let randomText = '';
let fixed = '';
//Call self x times, whole function wrapped in setTimeout
(function rustle(i) {
  setTimeout(function () {
    if (--i) {
      rustle(i);
    }
    nextFrame(i);
    si = si + 1;
  }, speed);
})(titleLength * frames + 1);
function nextFrame(pos) {
  for (let i = 0; i < titleLength - stri; i++) {
    //Random number
    let num = Math.floor(letters.length * Math.random());
    //Get random letter
    let letter = letters.charAt(num);
    randomText = randomText + letter;
  }
  if (si == frames - 1) {
    stri++;
  }
  if (si == frames) {
    // Add a letter;
    // every speed*10 ms
    fixed = fixed + title.charAt(stri - 1);
    si = 0;
  }
  const output = document.getElementById('output');
  output.innerHTML = fixed + randomText;
  randomText = '';
}

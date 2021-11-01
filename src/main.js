document.addEventListener('DOMContentLoaded', function () {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let title = 'BASED ON VARIOUS';
  let speed = 300;
  let frames = 10;
  let titleLength = title.length;
  let number = 0;
  let stri = 0;
  let randomText = '';
  let fixed = '';
  (function rustle(i) {
    setTimeout(function () {
      if (--i) {
        rustle(i);
      }
      nextFrame(i);
      number = number + 1;
    }, speed);
  })(titleLength * frames + 1);
  function nextFrame(item) {
    for (let i = 0; i < titleLength - stri; i++) {
      //랜덤으로 숫자 몇인지 알려주기 (letters에 들어가있는 알파벳 갯수 한정해서)
      let num = Math.floor(letters.length * Math.random());
      //위 숫자에 들어가있는 알파벳이 무엇인지
      let letter = letters.charAt(num);
      //block에 letter에서 출력된 알파벳 넣기
      randomText = randomText + letter;
    }
    if (number == frames - 1) {
      stri++;
      console.log(stri);
    }
    if (number == frames) {
      // Add a letter;
      // every speed*10 ms
      fixed = fixed + title.charAt(stri - 1);
      number = 0;
    }
    const output = document.getElementById('output');
    output.innerHTML = fixed + randomText;
    block = '';
  }
});

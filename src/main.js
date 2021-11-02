document.addEventListener('DOMContentLoaded', function () {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let title = 'BASED ON VARIOUS';
  let speed = 10;
  let frames = 10;

  let titleLength = title.length;
  let frameNumber = 0; //몇번째 frame인지 알려주는 숫자
  let stopString = 0;
  let randomText = '';
  let showLetters = '';
  const output = document.querySelector('.output');
  const exp = document.querySelector('.exp');

  (function rustle(i) {
    setTimeout(function () {
      if (--i) {
        rustle(i);
      }
      nextFrame(i);
      frameNumber = frameNumber + 1;
    }, speed);
  })(titleLength * frames + 1);
  function nextFrame() {
    //for문 타이틀글자수 - 정지되어있는 글자수
    for (let i = 0; i < titleLength - stopString; i++) {
      //랜덤으로 숫자 몇인지 알려주기 (letters에 들어가있는 알파벳 갯수 한정해서)
      let num = Math.floor(letters.length * Math.random());
      //위 숫자에 들어가있는 알파벳이 무엇인지
      let letter = letters.charAt(num);
      //randomText letter에서 출력된 알파벳 넣기
      randomText = randomText + letter;
      // console.log(stopString);
    }

    console.log(frameNumber, frames, showLetters, stopString);
    //만약에  number와 frame(처음시작 10개)-1이 같으면 정지되어있는 글자수를 하나 추가하기
    if (frameNumber == frames - 1) {
      stopString++;
      if (stopString == titleLength) {
        exp.classList.add('act');
      }
    } else if (frameNumber == frames) {
      // Add a letter;
      // every speed*10 ms
      showLetters = showLetters + title.charAt(stopString - 1);
      console.log(showLetters);
      frameNumber = 0;
    }

    output.innerHTML = showLetters + randomText;
    randomText = '';
  }
});

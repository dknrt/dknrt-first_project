'use strict';
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const title = document.querySelector(".title");
button1.addEventListener("click", function onClick(e) {
  e.preventDefault();

  function changeContent() {
    const currentSize = window.getComputedStyle(button2).fontSize;
    const newSize = (parseFloat(currentSize) + 50) + 'px';
    button2.style.fontSize = newSize;

    if (button1.textContent === 'Нет') { 
      button1.textContent = 'Не теряй такой шанс (нет)';
    } else if (button1.textContent === 'Не теряй такой шанс (нет)') { 
      button1.textContent = 'Не разбивай мне сердце (нет)';
    } else if (button1.textContent === 'Не разбивай мне сердце (нет)') { 
      button1.textContent = 'Может все-таки пойдешь? (нет)';
    } else if (button1.textContent === 'Может все-таки пойдешь? (нет)') { 
      button1.textContent = 'Подумай еще) (нет)';
    } else if (button1.textContent === 'Подумай еще) (нет)') { 
      button1.textContent = 'Не расстраивай меня (нет)';

     button1.style.fontSize = newSize;
     button1.textContent = 'Да';
     button1.style.backgroundColor = "green";
     button1.style.border = "1px solid green";
     button1.addEventListener('click', function onClick(el){
      el.preventDefault();
      const background = document.querySelector('body');
     background.style.backgroundImage = 'url("./img/firework-13.gif.webp")';
     background.style.backgroundSize = "cover";
     const newSize = (parseFloat(currentSize) + 50) + 'px';
    button2.style.fontSize = newSize;
     button1.style.fontSize = newSize;
     })
     
    } 
  }

  changeContent();
});

let pElement; 

button2.addEventListener("click", function onClick(e) {
  e.preventDefault();
  const background = document.querySelector('body');
  background.style.backgroundImage = 'url("./img/firework-13.gif.webp")';
  background.style.backgroundSize = "cover";
});
const btnMagic = document.querySelector('#btn');
const boxes = document.querySelector('#boxes');

let positionX = 0;
let positionY = 0;


for (let i = 0; i < 16; i++) {

   const boxEl = document.createElement('div');
   boxEl.classList.add('box');
   boxEl.style.backgroundPosition = `${positionX}px ${positionY}px`
   boxes.appendChild(boxEl);

   if ((i+1) % 4 === 0){
      positionX = 0;
      positionY = positionY -125;
   }else {
      positionX = positionX -125;
   }
}


btnMagic.addEventListener('click', ()=> boxes.classList.toggle('big'));

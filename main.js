const btnMagic = document.querySelector('#btn');
const boxes = document.querySelector('#boxes');
const quantity = 16;

let positionX = 0;
let positionY = 0;


for (let i = 0; i < quantity; i++) {

   const boxEl = document.createElement('div');
   boxEl.classList.add('box');
   console.log (positionX);
   console.log (positionY);
   boxEl.style.backgroundPosition = `${positionX}px ${positionY}px`

   if ((i+1) % 4 === 0){
      positionX = 0;
      positionY = positionY -125;
   }else {
      positionX = positionX -125;
   }

   boxes.appendChild(boxEl);
}

btnMagic.addEventListener('click', ()=>{
   boxes.classList.toggle('big');
})



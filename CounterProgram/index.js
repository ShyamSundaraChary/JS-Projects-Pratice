// let counter=0;

// increaseBtn.addEventListener('click',()=>{
//     counter++;
//     document.querySelector('.counter').innerHTML=counter;
//     if(counter>0){
//         document.querySelector('.counter').style.color='green';
//     }else if(counter<0){
//         document.querySelector('.counter').style.color='red';
//     }else{
//         document.querySelector('.counter').style.color='black';
//     }
// });

// decreaseBtn.addEventListener('click',()=>{
//     counter--;
//     document.querySelector('.counter').innerHTML=counter;
//     if(counter>0){
//         document.querySelector('.counter').style.color='green';
//     }else if(counter<0){
//         document.querySelector('.counter').style.color='red';
//     }else{
//         document.querySelector('.counter').style.color='black';
//     }
// }); 

// resetBtn.addEventListener('click',()=>{
//     counter=0;
//     document.querySelector('.counter').innerHTML=counter;
//     document.querySelector('.counter').style.color='black';
// });








let counter = 0;
const counterElement = document.querySelector('.counter');

increaseBtn.addEventListener('click', () => {
  counter++;
  updateCounter();
});

decreaseBtn.addEventListener('click', () => {
  counter--;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  updateCounter();
});

function updateCounter() {
  counterElement.innerHTML = counter;
  counterElement.style.color = getCounterColor();
}

function getCounterColor() {
  if (counter > 0) return 'green';
  if (counter < 0) return 'red';
  return 'black';
}
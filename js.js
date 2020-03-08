

const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
const spanThree = document.getElementById('three');
const spanOne = document.getElementById('one');
const spanTwo = document.getElementById('two');

burger.onclick = function () {
   if (menu.style.display === 'none') {
      menu.style.display = 'block'
   } else { 
      menu.style.display = 'none'
   }


   if( menu.style.display === 'block') {
      spanThree.style.opacity = '0';
      spanOne.style.transform = 'translateY(15px) rotate(-45deg)';
      spanTwo.style.transform = 'translateY(7px) rotate(45deg)';
      burger.style.top = '0';

   }
   else  {
      spanThree.style.opacity = '10';
      spanOne.style.transform = 'none';
      spanTwo.style.transform = 'none';
      burger.style.top = '5px';
   }


};
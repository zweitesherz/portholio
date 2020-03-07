

const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');

burger.onclick = function () {
   if( menu.style.display === 'none')
   { menu.style.display = 'block'}
   else { menu.style.display = 'none' }
};
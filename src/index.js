import './style.scss';

'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
   const menuBtn = document.querySelector('.header__burger');
   const menuBody  = document.querySelector('.menu');

   if (menuBtn && menuBody) {
      menuBtn.addEventListener('click', function (e) {
         document.body.classList.toggle('scroll-lock-js');
         menuBtn.classList.toggle('header__burger--active-js');
         menuBody.classList.toggle('menu--active-js');
      })
   }
});

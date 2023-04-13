'use strict';

import './style.scss';
// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';

let swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    speed: 1000,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: "auto",
    spaceBetween: 40,
});

// burger menu

document.addEventListener('DOMContentLoaded', () => {
   const menuBtn = document.querySelector('.header__burger');
   const menuBody  = document.querySelector('.menu');

   if (menuBtn && menuBody) {
      menuBtn.addEventListener('click', function (e) {
         document.body.classList.toggle('scroll-lock-js');
         menuBtn.classList.toggle('header__burger--active-js');
         menuBody.classList.toggle('menu--active-js');
      })
   }

// change buttons content on resize

   const loginBtn = document.querySelector('.header__login-btn');
   const hireWriterBtn = document.querySelector('.header__hire-btn');

   addTextToBtns();

   window.addEventListener('resize', e => {
      addTextToBtns();
   });

   function addTextToBtns () {
      if (window.innerWidth >= 768) {
         loginBtn.textContent = "Log in / Sign up ";
         hireWriterBtn.textContent = "Hire Expert";
      } else {
         loginBtn.textContent = "Log in";
         hireWriterBtn.textContent = "Hire";
      }
   }

   // accordion
   const accordion = document.querySelectorAll('.accordion__panel');

    accordion.forEach(el => {

      el.addEventListener('click', function () {

          let check = this.classList.contains('accordion__panel--active-js');

          accordion.forEach(el => {
              el.classList.remove('accordion__panel--active-js');
          })

          if(!check) {
              this.classList.add('accordion__panel--active-js');
          }

      });

   });


});



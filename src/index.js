'use strict';

import './style.scss';
// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {

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
    initialSlide: 1,
    spaceBetween: 40,
});

// burger menu


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

   // show hidden text (tip section)
    const readMore = document.querySelector('.tip__btn');
    const tip = document.querySelector('.tip');
    const tipContent = document.querySelector('.tip__content');
    const tipContentP = document.querySelector('.tip__content p');
    let cHeight = tipContent.clientHeight;

    function autoHeightContent() {
       if (tipContentP && tipContent) {
           let pHeight = tipContentP.clientHeight;
           tipContent.style.maxHeight = pHeight+'px';
       }
    }

    setTimeout(function () {
       autoHeightContent();
    }, 200)

    window.addEventListener('resize', e => {
        autoHeightContent();
    });

    readMore.addEventListener('click', function(e) {

       let pHeight = tipContentP.clientHeight;
       if (tipContent) {
           tipContent.classList.toggle('open-js')
           if (tipContent.classList.contains('open-js')) {
               tipContent.style.maxHeight = cHeight + 'px';
               readMore.textContent = "Hide";
           } else {
               tipContent.style.maxHeight = pHeight + 'px';
               readMore.textContent = "Read more";
               tip.scrollIntoView({
                   behavior: 'auto',
                   block: 'start'
               })
           }
       }
    })

    function autoWidthContent() {
        const allPagination = document.querySelector('.swiper-pagination');
        const allBullets = document.querySelectorAll('.swiper-pagination-bullet');
        let colBullets = allBullets.length;
        let allWidthPagination = allPagination.clientWidth*0.8;
        let bulletWidth = Math.round(((allWidthPagination / colBullets) - 9));

        allBullets.forEach(el => {
            el.style.width = bulletWidth + 'px';
        });
    }

    setTimeout(function () {
        autoWidthContent();
    }, 1200)

    window.addEventListener('resize', e => {
        autoWidthContent();
    });





});



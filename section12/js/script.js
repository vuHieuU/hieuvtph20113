'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

///////////////////////////////////
////////////////////////////////////////////////


 // Chọn, tạo và xóa các phần tử
        // console.log(document.documentElement);
        // console.log(document.head);
        // console.log(document.body);
        // const header = document.querySelector('.header');
        // const allSections = document.querySelectorAll('.section');
        // console.log(allSections);
        // document.getElementById('section--1');
        // const allButtons = document.getElementsByTagName('button');
        // console.log(allButtons);
        // console.log(document.getElementsByClassName('btn'));
        // // Creating and inserting elements
        //  const message = document.createElement('div');
        // message.classList.add('cookie-message');
        // // message.textContent = 'We use cookied for improved functionality and analytics.';
        // message.innerHTML =
        //     'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
            // thê html/cssm vào đầu
        // header.prepend(message);
           // thêm html/css vào cuối  
        // header.append(message);
        // thêm html/css vào đầu và cuối
        // header.append(message.cloneNode(true));
          // thê html/cssm vào đầu
        // header.before(message);
         // thêm html/css vào cuối  
        // header.after(message);

    // delete
    // document.querySelector('.btn--close-cookie').addEventListener('click', function(){
    //     message.remove();
    // })
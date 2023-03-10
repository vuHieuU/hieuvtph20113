'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');



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

// cuộn mượt learn more

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    // console.log(s1coords);
    // console.log(e.target.getBoundingClientRect());
    // console.log(window.pageXOffset, window.pageYOffset);
    // console.log(
    //     'height/width viewport',
    //     document.documentElement.clientHeight,
    //     document.documentElement.clientWidth
    //   );

    // cách 1
    // window.scrollTo({
    //     top : s1coords.top + window.pageYOffset,
    //     left : s1coords.left + window.pageXOffset,
    //     behavior : 'smooth'
    // })
    // cách 2
    section1.scrollIntoView({ behavior: 'smooth' });
});

// cuộn mượt nav--link

document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav__link')){
     const id = e.target.getAttribute('href');
     document.querySelector(id).scrollIntoView({behavior:'smooth'})
    }
});

//thành phần theo thẻ
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', (e)=>{
    e.preventDefault();
     const clicker = e.target.closest('.operations__tab')
     if(!clicker) return;

    //  remove
    tabs.forEach(t =>t.classList.remove('operations__tab--active'))
    tabsContent.forEach(c =>c.classList.remove('operations__content--active'))
     // click tab
     clicker.classList.add('operations__tab--active')

     document.querySelector(`.operations__content--${clicker.dataset.tab}`).classList.add('operations__content--active')
})
// Menu fade animation

const nav = document.querySelector('.nav');
const handleHover = function(e){
    if(e.target.classList.contains('nav__link')){
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach(el => {
            if(el !== link) el.style.opacity = this;
        })
        logo.style.opacity = this;
    }
}
    nav.addEventListener('mouseover', handleHover.bind(0.5));
    nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////
////////////////////////////////////////////////

const header = document.querySelector('.nav');
header.style.backgroundColor = 'white';
header.style.position = 'fixed';

// Slider
const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
      createDots();
  
      activateDot(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();


// // Chọn, tạo và xóa các phần tử
//         console.log(document.documentElement);
//         console.log(document.head);
//         console.log(document.body);
//         const header = document.querySelector('.header');
//         const allSections = document.querySelectorAll('.section');
//         console.log(allSections);
//         document.getElementById('section--1');
//         const allButtons = document.getElementsByTagName('button');
//         console.log(allButtons);
//         console.log(document.getElementsByClassName('btn'));
//         // Creating and inserting elements
//          const message = document.createElement('div');
//         message.classList.add('cookie-message');
//         // message.textContent = 'We use cookied for improved functionality and analytics.';
//         message.innerHTML =
//             'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
//             // thêm html/cssm vào đầu
//         // header.prepend(message);
//         //    thêm html/css vào cuối  
//         header.append(message);
//         // thêm html/css vào đầu và cuối
//         // header.append(message.cloneNode(true));
//         //   thê html/cssm vào đầu
//         // header.before(message);
//         //  thêm html/css vào cuối  
//         // header.after(message);

//     // delete
//     document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//         message.remove();
//     })

//     // style

//     message.style.background = 'orange'
//     message.style.width = '120%'
//     console.log(message.style.background);


//     console.log(getComputedStyle(message).height);
//     console.log(getComputedStyle(message).color);

//     // thêm kích thước
//     message.style.height =parseFloat(getComputedStyle(message).height,10) + 30 +'px';

//     //  đổi màu với setProperty
//     document.documentElement.style.setProperty('--color-primary','blue')

//    // Attributes
//     const logo = document.querySelector('.nav__logo');
//     console.log(logo.alt);
//     console.log(logo.className);
//     logo.alt = 'Beautiful minimalist logo';
//     // Non-standard
//     console.log(logo.designer);
//     // lấy thuộc tính tự thêm
//     console.log(logo.getAttribute('designer'));
//     // thêm thuộc tính
//     logo.setAttribute('company', 'Bankist');
//     // lấy link
//     console.log(logo.src);
//     // lấy tên logo
//     console.log(logo.getAttribute('src'));

//     const link = document.querySelector('.nav__link--btn');
//     console.log(link.href);
//     console.log(link.getAttribute('href'));

//     // Classes
//     logo.classList.add('c', 'j');
//     logo.classList.remove('c', 'j');
//     logo.classList.toggle('c');
//     logo.classList.contains('c'); // not includes
//     // Don't use
//     logo.clasName = 'jonas';

// các sự kiện

// const h1 = document.querySelector('h1');

// const h1Alert = function(e){
//     alert('addEventListener');
// };
//     h1.addEventListener('mouseenter', h1Alert)
//    setTimeout(() => h1.removeEventListener('mouseenter' , h1Alert),3000)

// sự kiện trong thưc tế

// // random số
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// // random màu
// const rgbColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

// // console.log(rgbColor(0, 255))

// document.querySelector('.nav__link').addEventListener('click', function(e){
//     e.preventDefault();
//      this.style.backgroundColor = rgbColor();
// })
// document.querySelector('.nav__links').addEventListener('click', function(e){
//     e.preventDefault();
//      this.style.backgroundColor = rgbColor();
// })
// document.querySelector('.nav').addEventListener('click', function(e){
//     e.preventDefault();
//      this.style.backgroundColor = rgbColor();
// })

//  const h1 = document.querySelector('h1');

//  console.log(h1.querySelectorAll('.highlight'));
//  console.log(h1.childNodes);
//  console.log(h1.children);
//  h1.firstElementChild.style.color = 'blue';
//  h1.lastElementChild.style.color = 'orangered';

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('header').style.backgroundColor = "yellow"
// h1.closest('h1').style.backgroundColor = "violet"

// // thẻ trước sau h1
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// //kiểu thẻ trước sau h1
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function(el) {
//      if(el !== h1) el.style.transform = 'scale(0.5)';
// })

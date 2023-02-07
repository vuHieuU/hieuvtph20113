'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
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

// cuộn mượt learn more

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
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
    section1.scrollIntoView({behavior:'smooth'});
});



///////////////////////////////////
////////////////////////////////////////////////


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
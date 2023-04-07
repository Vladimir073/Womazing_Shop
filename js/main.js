// Slider Section main-section

const swiper = new Swiper('.swiper', {
    loop : true,
    stopOnLastSlide : false,
    autoplay : true,
    autoplaySpeed : 2000,
    pauseOnHover : false,
    arrows : false,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
      },
});


// Burger
const mainSection = document.getElementById('main');
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})

mainSection.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
})

// Scroll Header


const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 250) {
        header.classList.add('active');
        mainSection.classList.add('active');
    } else {
        header.classList.remove('active');
        mainSection.classList.remove('active');
    }
})

//Tabs Section Shop

const tabs = document.querySelector('.shop__tabs');

tabs.addEventListener('click', (e) => {
    const currentTab = e.target;
    for(let tab of tabs.children) {
        tab.classList.remove('active');
    }
    currentTab.classList.add('active');
})












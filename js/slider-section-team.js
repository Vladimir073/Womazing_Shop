const sliders = document.querySelectorAll(".team__image");
const dots = document.querySelectorAll('.team__dot');
const arrowLeft = document.querySelector('.team__arrow-left');
const arrowRight = document.querySelector('.team__arrow-right');

let index = 0;

const currentSlider = (ind) => {
    for (let slider of sliders) {
        slider.classList.remove('active');
    }
    sliders[ind].classList.add('active');
}

const currentDot = (ind) => {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[ind].classList.add('active');
}

function currentElem (ind) {
    currentSlider(ind);
    currentDot(ind);
}

const nextSlider = () => {
    if(index == sliders.length - 1){
        index = 0;
        currentElem(index);
    } else {
        index++;
        currentElem(index);
    }
}

const prevSlider = () => {
    if(index == 0){
        index = sliders.length - 1;
        currentElem(index);
    } else {
        index--;
        currentElem(index);
    }
}

if(window.innerWidth <= 575 ) {
  setInterval(nextSlider, 2000);
} 

dots.forEach((item, ind) => {
    item.addEventListener('click', () => {
        index = ind;
        currentElem(ind);
    }) 
})

arrowLeft.addEventListener('click', prevSlider);
arrowRight.addEventListener('click', nextSlider);
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let index = 0;
function goTo(i){
    index = Math.max(0, Math.min(i, slides.length - 1));
const offset = -index * 100;
track.style.transform = `translateX(${offset}%)`;
slides.forEach((s,idx)=> s.setAttribute('aria-hidden', idx!==index));
}
next.addEventListener('click', ()=> goTo(index+1));
prev.addEventListener('click', ()=> goTo(index-1));
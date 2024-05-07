let mode = document.querySelector('.mode');

mode.textContent = localStorage.getItem('event');

let places = document.querySelectorAll('.sector-first-place');

for(let place of places){
    place.addEventListener('click' , function(){
        localStorage.setItem('place' , this.textContent)
    })
}
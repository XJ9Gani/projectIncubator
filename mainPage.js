let name = localStorage.getItem('name');

let mainPageName = document.querySelector('.regist-page-btn');

mainPageName.textContent = name;

let events = document.querySelectorAll('.top-event-container-text');

for(let event of events){
    event.addEventListener("click" , function(){
        localStorage.setItem('event' , this.textContent)
    })
}



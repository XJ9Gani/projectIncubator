let name = document.querySelector('.delivery-form-name-value');
let surname = document.querySelector('.delivery-form-surname-value');
let event = document.querySelector('.delivery-form-event-value');
let place = document.querySelector('.delivery-form-place-value');
let adress = document.querySelector('.delivery-form-adress-value');
let submit = document.querySelector('.delivery-submit');

name.textContent = localStorage.getItem('name');
surname.textContent = localStorage.getItem('surname');
event.textContent = localStorage.getItem('event');
place.textContent = localStorage.getItem('place');


submit.addEventListener("click" , function(){
    localStorage.setItem('adress' , adress.value);
    alert("Your dilevry submitted");
    alert("Имя:" + name.textContent + '\n' + "Фамилия:" + surname.textContent + '\n' + "Меоприятие: " + event.textContent + '\n' + "Место: "  +  place.textContent + '\n' + "Adress: "  + adress.value);
});

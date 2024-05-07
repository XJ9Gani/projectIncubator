////Registration Page 
let name = document.querySelector(".registration-panel-form-name");
let surname = document.querySelector(".registration-panel-form-surname");
let login = document.querySelector(".registration-panel-form-login");
let password1 = document.querySelector(".registration-panel-form-password1");
let password2 = document.querySelector(".registration-panel-form-password2");
let submit = document.querySelector(".submit");

login.addEventListener('input' , function(){
    let error = document.querySelector('.registration-panel-form-text1-error')
    let flag = true;
    let reg1 = /[a-z]+@gmail/;
    if (reg1.test(login.value)) {
        login.style.border = '5px solid green';
        error.style.opacity  = '0';
    }else {
        login.style.border = '5px solid red';
        error.style.opacity  = '1';
    }
});

password2.addEventListener('input' , function(){
    let passError = document.querySelector('.registration-panel-form-password2-error')
     if(password2.value === password1.value && password1.value.length > 6){
        password1.style.border = '5px solid green';
        password2.style.border = '5px solid green';
        passError.style.opacity  = '0';
     }else{
        password1.style.border = '5px solid red';
        password2.style.border = '5px solid red';
        passError.style.opacity  = '1'
     }
});

let mainPageName = document.querySelector('.regist-page-btn');

let arr = [];
submit.addEventListener('click' , function(){
    localStorage.setItem('name', name.value);
    localStorage.setItem('surname', surname.value);
    localStorage.setItem('login', login.value);
    localStorage.setItem('password', password1.value);
});


///////////Main Page




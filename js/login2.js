// document.getElementById('btn-submit').addEventListener('click', function () {
//     // step-2: get the email address inside the email input field 
//     // always remember to use .value to get text from an input field
//     const emailField = document.getElementById('user-email');
//     const email = emailField.value;
//     // step-3: get password
//     // 3.a: set id on the html element 
//     // 3.b:get the element
//     // 3.c:get the value from the element
//     const passwordFiled = document.getElementById('user-password');
//     const password = passwordFiled.value
//     // DANGER: DO NOT VERIFY EMAIL PASSWORD ON THE CLICK SIDE
//     // step-4: verify email and password and check whether valid user or not
//     if (email === 'santan@baap.com' && password === 'secret') {
//         window.location.href = 'bank.html'
//     } 
//     else{
//         alert('tui password vula gesos!! toka ami terjjo sontan gosona korlam.')
//     }
// })
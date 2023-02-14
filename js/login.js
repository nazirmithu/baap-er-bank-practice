document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    
    if(email === 'baaperbank@gmail.com' && password === '123456'){
        window.location.href = 'bank.html'
    }
    else{
        alert('please enter valid email and password')
    }
    })
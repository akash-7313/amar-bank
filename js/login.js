document.getElementById('login-btn').addEventListener('click',function() {
    // console.log('btn clicked');

    // get user email
    var userEmail = document.getElementById('email');
    var email = userEmail.value;

    // get user password
    var userPassword = document.getElementById('password');
    var password = userPassword.value;

    // valid or not
    if(email=='a@b.com' && password=='123') {
        // console.log('valid');
        window.location.href='bank.html';
    }
    else {
        alert('wrong info');
    }
})








































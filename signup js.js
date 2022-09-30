const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value();
    const password2Value = password2.value();

    // var password = document.getElementById("password").value;  
    // var password2 = document.getElementById("password2").value;  
    //if(password === password2)  
    //{   
    //    alert("Password created successfully");  
    //}  
    //else {  
    //  alert("Passwords did not match");  
    //}

    if(usernameValue === ''){
        setErrorFor(username, 'Nama tidak boleh kosong');
    }
    else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email tidak boleh kosong');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email tidak valid');
    }
    else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password tidak boleh kosong');
    }
    else{
        setSuccessFor(password);
    }

    if(password2Value === ''){
        setErrorFor(password2, 'Password tidak boleh kosong');
    }
    else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Password tidak sama');
    }
    else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement; // ini dari yg .form-control
    const small = formControl.querySelector('small');

    // tanda misal ada error ntar
    small.innerText = message;

    // tambah kelas error dari sebelomnya
    formControl.className = 'form-control error';
}

function matchPassword(checkInputs) {  
    var password = document.getElementById("password").value;  
    var password2 = document.getElementById("password2").value;  
    if(password === password2)  
    {   
        alert("Password created successfully");  
    }  
    else {  
      alert("Passwords did not match");  
    }
}
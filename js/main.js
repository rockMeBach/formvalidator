const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function checkValidEmail(input){     
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailPattern.test(input.value.trim())){
        showError(input, "Please enter a valid email");
    }
}

function checkPasswordsMatch(input1, input2){
    if(input1.value.trim()!=input2.value.trim()){
        showError(input2, "Passwords do not match");
    }
}

function showError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerHTML = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input, `${input.dataset.fieldname} is required`);
            allFieldsFilled = false;
        }else{
            showSuccess(input);
        }
    });
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${input.dataset.fieldname} must be at least ${min} characters long`);
    }else if(input.value.length > max){
        showError(input, `${input.dataset.fieldname} must be less than ${max} characters`);
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2])
    checkValidEmail(email);
    checkPasswordsMatch(password, password2);
    checkLength(username, 3, 10);
    checkLength(password, 4, 10);
});
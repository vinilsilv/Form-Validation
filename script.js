var form = document.getElementById('myForm');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password1 = document.getElementById('password1');
var password2 = document.getElementById('password2');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
});
function checkInputs() {
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var password1Value = password1.value.trim();
    var password2Value = password2.value.trim();
    checkForEmpty(usernameValue, username);
    checkForEmpty(emailValue, email);
    if ((checkForEmpty(password1Value, password1) == false) && password1Value.length <= 6) {
        setErrorFor(password1, "Password must be longer than 6 characters");
    }
    else if (checkForEmpty(password1Value, password1) == false && password1Value.length > 6) {
        setSuccessFor(password1);
    }
    if (password2Value != password1Value) {
        setErrorFor(password2, "Passwords doesn't match");
    }
    else if ((checkForEmpty(password2Value, password2) == false) && password2Value == password1Value) {
        setSuccessFor(password2);
    }
}
function checkForEmpty(formFieldValue, formField) {
    if (formFieldValue === '') {
        setErrorFor(formField, 'Field cannot be blank');
        return true;
    }
    else {
        setSuccessFor(formField);
        return false;
    }
}
function setErrorFor(formField, message) {
    var formControl = formField.parentElement;
    var errMessage = formControl.querySelector('.error-message');
    errMessage.innerText = message;
    formControl.className = 'input-inner-wrapper error';
}
function setSuccessFor(input) {
    var formControl = input.parentElement;
    formControl.className = 'input-inner-wrapper success';
}

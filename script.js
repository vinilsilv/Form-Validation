const form = document.getElementById('myForm')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const password1Value = password1.value.trim()
  const password2Value = password2.value.trim()
  
  checkForEmpty(usernameValue, username)
  checkForEmpty(emailValue, email)
  
  
  if ((checkForEmpty(password1Value, password1) == false) && password1Value.length <= 6) {
    setErrorFor(password1, "Password must be longer than 6 characters")
  } else if (checkForEmpty(password1Value, password1) == false && password1Value.length > 6) {
    setSuccessFor(password1)
  }
  
  if (password2Value != password1Value) {
    setErrorFor(password2, "Passwords doesn't match")
  } else if ((checkForEmpty(password2Value, password2) == false) && password2Value == password1Value){
    setSuccessFor(password2)
  }
  
}

function checkForEmpty(input, input2) {
  if (input === '') {
    setErrorFor(input2, 'Field cannot be blank')
    return true
  } else {
    setSuccessFor(input2)
    return false
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const errMessage = formControl.querySelector('.error-message')
  errMessage.innerText = message
  
  formControl.className = 'input-inner-wrapper error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'input-inner-wrapper success'
}


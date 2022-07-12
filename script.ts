const form = <HTMLFormElement>document.getElementById('myForm')
const username = <HTMLInputElement>document.getElementById('username')
const email = <HTMLInputElement>document.getElementById('email')
const password1 = <HTMLInputElement>document.getElementById('password1')
const password2 = <HTMLInputElement>document.getElementById('password2')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  checkInputs()
})

function checkInputs() {
  const usernameValue: string = username.value.trim()
  const emailValue: string = email.value.trim()
  const password1Value: string = password1.value.trim()
  const password2Value: string = password2.value.trim()
  
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

function checkForEmpty(formFieldValue: string, formField: HTMLInputElement) {
  if (formFieldValue === '') {
    setErrorFor(formField, 'Field cannot be blank')
    return true
  } else {
    setSuccessFor(formField)
    return false
  }
}

function setErrorFor(formField: HTMLInputElement, message: string) {
  const formControl = formField.parentElement
  const errMessage: HTMLParagraphElement = formControl.querySelector('.error-message')
  errMessage.innerText = message
  
  formControl.className = 'input-inner-wrapper error'
}

function setSuccessFor(input: HTMLInputElement) {
  const formControl = input.parentElement;
  formControl.className = 'input-inner-wrapper success'
}


const form = document.getElementById('form')

const nameInput = document.getElementById('surname')
const surnameInput = document.getElementById('name')

function isNameInputValid () {
  const regExp = /^[A-Z][a-z]$/

  return regExp.test(nameInput.value)
}

function isSurnameInputInvalid () {
  const regExp = /^[A-Z][a-z]$/

  return regExp.test(surnameInput.value)
}

function validateForm () {
  return isNameInputValid() && !isSurnameInputInvalid()
}

form.addEventListener('send', validateForm())

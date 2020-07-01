const form = document.getElementById('form')

// pomyloneID
const nameInput = document.getElementById('surname')
// pomyloneID
const surnameInput = document.getElementById('name')

function isNameInputValid () {
  const regExp = /^[A-Z][a-z]$/

  return regExp.test(nameInput.value)
}

function isSurnameInputInvalid () {
  // w regexp nie ma "-" w nazwiskach
  const regExp = /^[A-Z][a-z]$/

  // dodać "!""
  return regExp.test(surnameInput.value)
}

function validateForm () {
  return isNameInputValid() && !isSurnameInputInvalid()
}

// zły event listener
form.addEventListener('send', validateForm())

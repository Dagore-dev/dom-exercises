const form = document.querySelector('[action="#saludo"]')
const pGreet = document.getElementById('saludo')
const formFields = {
  name: document.getElementById('nombre'),
  surname: document.getElementById('apellido')
}

form.addEventListener('submit', handleSubmit)

/**
 * @param {SubmitEvent} e
 */
function handleSubmit (e) {
  e.preventDefault()

  const name = formFields.name.value
  const surname = formFields.surname.value

  const greet = `Hola ${name} ${surname}, gracias por rellenar el formulario.`
  pGreet.textContent = greet
}

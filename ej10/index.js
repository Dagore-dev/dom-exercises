window.addEventListener('DOMContentLoaded', main)

function main () {
  const formFields = {
    email: document.getElementById('email'),
    url: document.getElementById('url')
  }

  formFields.email.addEventListener('change', handleChange)
  formFields.email.addEventListener('input', handleChange)

  formFields.url.addEventListener('change', handleChange)
  formFields.url.addEventListener('input', handleChange)

  /**
   * @param {Event} e
   */
  function handleChange (e) {
    /** @type {HTMLInputElement} */
    const target = e.target

    if (target.validity.valid) {
      target.nextElementSibling.textContent = 'correcto'
    } else {
      target.nextElementSibling.textContent = ''
    }
  }
}

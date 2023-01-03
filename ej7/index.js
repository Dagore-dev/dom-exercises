window.addEventListener('DOMContentLoaded', main)

function main () {
  const formForm = document.getElementById('form')
  const formFields = {
    num1: document.getElementById('valor1'),
    num2: document.getElementById('valor2'),
    operations: document.querySelectorAll('[name="operations[]"]')
  }
  const resultP = document.getElementById('resultado')

  formForm.addEventListener('submit', handleSubmit)

  /**
   * @param {SubmitEvent} e
   */
  function handleSubmit (e) {
    e.preventDefault()

    const num1 = Number(formFields.num1.value)
    const num2 = Number(formFields.num2.value)

    const results = []

    for (const operation of formFields.operations) {
      if (operation.checked) {
        const text = getVerboseResult(operation.value, num1, num2)
        results.push(text)
      }
    }

    resultP.textContent = results.join(' - ')
  }

  /**
   * @param {string} operation
   * @param {number} num1
   * @param {number} num2
   * @returns {string}
   */
  function getVerboseResult (operation, num1, num2) {
    const value = performOperation(operation, num1, num2)

    return `La ${operation} es ${value}`
  }

  /**
   * @param {string} operation
   * @param {number} num1
   * @param {number} num2
   */
  function performOperation (operation, num1, num2) {
    switch (operation) {
      case 'suma':
        return num1 + num2
      case 'resta':
        return num1 - num2
      default:
        return NaN
    }
  }
}

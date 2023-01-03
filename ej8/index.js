window.addEventListener('DOMContentLoaded', main)

function main () {
  const formForm1 = document.getElementById('form1')
  const form1Fields = {
    num1: document.getElementById('valor1'),
    num2: document.getElementById('valor2'),
    operation: document.getElementById('operacion')
  }

  formForm1.addEventListener('submit', handleForm1Submit)

  const formForm2 = document.getElementById('form2')
  const form2Fields = {
    operations: document.getElementById('operaciones')
  }

  formForm2.addEventListener('submit', handleForm2Submit)

  const result1P = document.getElementById('resultado1')
  const result2P = document.getElementById('resultado2')

  /**
   * @param {SubmitEvent} e
   */
  function handleForm1Submit (e) {
    e.preventDefault()

    const num1 = Number(form1Fields.num1.value)
    const num2 = Number(form1Fields.num2.value)
    const operation = form1Fields.operation.value
    const result = operation === 'suma' ? num1 + num2 : num1 - num2

    result1P.textContent = `La ${operation} es ${result}`
  }

  /**
   * @param {SubmitEvent} e
   */
  function handleForm2Submit (e) {
    e.preventDefault()

    const num1 = Number(form1Fields.num1.value)
    const num2 = Number(form1Fields.num2.value)
    const operations = Array.from(form2Fields.operations.selectedOptions).map(option => option.value)

    const results = []

    for (const operation of operations) {
      const text = getVerboseResult(operation, num1, num2)
      results.push(text)
    }

    result2P.textContent = results.join(' - ')
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

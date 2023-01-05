window.addEventListener('DOMContentLoaded', main)

function main () {
  // Checkboxes creation
  const target = document.getElementById('target')
  const checkboxes = createCheckboxes()

  target.appendChild(checkboxes)

  // Buttons
  const checkAllBtn = document.getElementById('check-all')
  const uncheckAllBtn = document.getElementById('uncheck-all')

  checkAllBtn.addEventListener('click', handleCheckAll)
  uncheckAllBtn.addEventListener('click', handleUncheckAll)

  function handleCheckAll () {
    const checkboxes = document.querySelectorAll('[name="checkboxes[]"]')

    for (const checkbox of checkboxes) {
      checkbox.checked = true
    }
  }

  function handleUncheckAll () {
    const checkboxes = document.querySelectorAll('[name="checkboxes[]"]')

    for (const checkbox of checkboxes) {
      checkbox.checked = false
    }
  }
}

/**
 * @returns {DocumentFragment}
 */
function createCheckboxes () {
  const fragment = document.createDocumentFragment()

  for (let i = 0; i < 100; i++) {
    const random = Math.floor(Math.random() * 100)

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'checkboxes[]'
    checkbox.id = i
    checkbox.value = random

    const label = document.createElement('label')
    label.textContent = random

    label.appendChild(checkbox)
    fragment.appendChild(label)
  }

  return fragment
}

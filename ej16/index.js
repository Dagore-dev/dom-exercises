window.addEventListener('DOMContentLoaded', main)

function main() {
  const firstBox = document.getElementById('first')
  const secondBox = document.getElementById('second')
  const resultBox = document.getElementById('result')
  const newPairBtn = document.getElementById('new-pair')
  const compareBtn = document.getElementById('compare')

  newPairBtn.addEventListener('click', handleNewPair)
  compareBtn.addEventListener('click', handleComparison)

  function handleNewPair() {
    removeChildren(firstBox)
    removeChildren(secondBox)

    const r1 = Math.floor(Math.random() * 100)
    const r2 = Math.floor(Math.random() * 100)

    const firstP = document.createElement('p')
    firstP.textContent = r1

    const secondP = document.createElement('p')
    secondP.textContent = r2

    firstBox.appendChild(firstP)
    secondBox.appendChild(secondP)

    compareBtn.disabled = false
  }

  function handleComparison() {
    removeChildren(resultBox)
    const n1 = Number(firstBox.firstElementChild.textContent)
    const n2 = Number(secondBox.firstElementChild.textContent)

    const resultP = document.createElement('p')
    resultP.textContent = n1 > n2 ? n1 : n2

    resultBox.appendChild(resultP)

    compareBtn.disabled = true
  }
}

/**
 * @param {HTMLElement} element 
 */
function removeChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

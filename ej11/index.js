window.addEventListener('DOMContentLoaded', main)

function main () {
  const numbersUl = document.getElementById('numbers')
  const addNumberBtn = document.getElementById('add-number')

  addNumberBtn.addEventListener('click', handleClick)

  function handleClick () {
    const random = Math.floor(Math.random() * 100)
    const li = document.createElement('li')
    li.textContent = random

    numbersUl.appendChild(li)
  }
}

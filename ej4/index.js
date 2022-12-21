window.addEventListener('DOMContentLoaded', main)

function main () {
  const list = document.getElementById('lista')
  const addBtn = document.getElementById('add-btn')

  addBtn.addEventListener('click', e => addToList(list))
}

/**
 * @param {HTMLElement} list
 */
function addToList (list) {
  const li = document.createElement('li')
  li.textContent = list.children[Math.floor(Math.random() * list.children.length)].textContent

  list.appendChild(li)
}

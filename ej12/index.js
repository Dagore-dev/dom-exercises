window.addEventListener('DOMContentLoaded', main)

function main () {
  const table = createTable()
  document.body.appendChild(table)
  const btn = document.getElementById('highlight-almost-prime')

  btn.addEventListener('click', handleClick)

  function handleClick () {
    for (const tr of table.children) {
      for (const td of tr.children) {
        const n = Number(td.textContent)

        if (isAlmostPrime(n)) {
          td.classList.add('bg-yellow')
        }
      }
    }
  }
}

/**
 * @returns {HTMLTableElement}
 */
function createTable () {
  const table = document.createElement('table')
  const fragment = document.createDocumentFragment()

  let n = 1

  for (let i = 0; i < 100; i++) {
    const tr = document.createElement('tr')
    const rowFragment = document.createDocumentFragment()

    for (let j = 0; j < 100; j++) {
      const td = document.createElement('td')
      td.textContent = n
      n++
      rowFragment.appendChild(td)
    }

    tr.appendChild(rowFragment)
    fragment.appendChild(tr)
  }

  table.appendChild(fragment)
  return table
}

/**
 * @param {number} n
 * @returns {boolean}
 */
function isAlmostPrime (n) {
  let count = 0

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++
    }
  }

  return count === 3
}

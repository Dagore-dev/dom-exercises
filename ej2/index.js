window.addEventListener('DOMContentLoaded', main)

function main () {
  let message = ''
  // Número de enlaces de la página
  const anchorNodeList = document.getElementsByTagName('a')
  const length = anchorNodeList.length
  message += `Enlaces en la página: ${length}\n`

  // Dirección a la que enlaza el penúltimo enlace
  if (length > 0) {
    message += 'Dirección a la que enlaza el penúltimo enlace: '

    if (length > 1) {
      message += `"${anchorNodeList[length - 2].href}"`
    } else {
      message += `"${anchorNodeList[0].href}"`
    }
  }

  message += '\n'

  // Número de enlaces que enlazan a http://prueba
  let count = 0

  for (const anchor of anchorNodeList) {
    if (anchor.href === 'http://prueba/') {
      count++
    }
  }

  message += `Número de enlaces que enlazan a "http://prueba": ${count}\n`

  // Número de enlaces del tercer párrafo
  const anchorsInThirdP = document.querySelectorAll('p:nth-child(3) a').length

  message += `Número de enlaces del tercer párrafo: ${anchorsInThirdP}`

  window.alert(message)
}

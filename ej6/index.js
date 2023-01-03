const pNodeList = document.getElementsByTagName('p')

// Que en el tercer párrafo haya un enlace con el texto «+ info» creado con JavaScript y que enlace a http://www.iesromerovargas.com/
const infoAnchor = document.createElement('a')
infoAnchor.textContent = '+ info'
infoAnchor.href = 'http://www.iesromerovargas.com/'

pNodeList[2].appendChild(infoAnchor)

// Inserta un párrafo de color rojo entre el tercer y el cuarto párrafos
const redP = document.createElement('p')
redP.textContent = 'Esto es un párrafo que debería ser rojo'
redP.classList.add('red')

pNodeList[2].parentNode.insertBefore(redP, pNodeList[2].nextSibling)

// Elimina el segundo párrafo [1]
pNodeList[1].parentElement.removeChild(pNodeList[1])

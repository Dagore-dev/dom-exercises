const link = document.querySelector('.enlace')
link.addEventListener('click', show)

/**
 * @param {PointerEvent} e
 */
function show (e) {
  e.preventDefault()
  const text = e.target.textContent

  text === 'Seguir leyendo'
    ? e.target.textContent = 'Contraer'
    : e.target.textContent = 'Seguir leyendo'

  const hiddenP = document.querySelector('.adicional')
  hiddenP.classList.toggle('oculto')
}

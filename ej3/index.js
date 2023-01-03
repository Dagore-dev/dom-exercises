window.addEventListener('DOMContentLoaded', main)

function main () {
  const link = document.querySelector('.enlace')
  link.addEventListener('click', show)

  /**
   * @param {PointerEvent} e
   */
  function show (e) {
    e.preventDefault()
    const span = document.querySelector('.adicional.oculto')
    span.classList.remove('oculto')
    e.target.classList.add('oculto')
  }
}

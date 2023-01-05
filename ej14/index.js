window.addEventListener('DOMContentLoaded', main)

function main () {
  const pNodeList = document.querySelectorAll('#target p')
  const revealBtn = document.getElementById('reveal-btn')

  for (const p of pNodeList) {
    p.addEventListener('click', handlePClick)
    p.addEventListener('dblclick', handlePDoubleClick)
  }

  revealBtn.addEventListener('click', handleReveal)

  /**
   * @param {PointerEvent} e
   */
  function handlePClick (e) {
    window.setTimeout(() => {
      /** @type {HTMLParagraphElement} */
      const target = e.target
      target.classList.add('hidden')
    }, 200)
  }

  /**
   * @param {PointerEvent} e
   */
  function handlePDoubleClick (e) {
    /** @type {HTMLParagraphElement} */
    const target = e.target
    target.remove()
  }

  function handleReveal () {
    const pNodeList = document.querySelectorAll('#target p')

    for (const p of pNodeList) {
      p.classList.remove('hidden')
    }
  }
}

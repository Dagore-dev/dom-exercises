window.addEventListener('DOMContentLoaded', main)

function main () {
  const commentsTextArea = document.getElementById('comentarios')
  const charactersRemainingSpan = document.getElementById('resultado')

  charactersRemainingSpan.textContent = commentsTextArea.maxLength

  commentsTextArea.addEventListener('change', handleChange)
  commentsTextArea.addEventListener('input', handleChange)

  function handleChange () {
    const maxLength = Number(commentsTextArea.maxLength)
    const currentLength = Number(commentsTextArea.textLength)
    charactersRemainingSpan.textContent = maxLength - currentLength
  }
}

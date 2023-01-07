window.addEventListener('DOMContentLoaded', main)

function main() {
  updateProtocol()
  updateParagraphClassName()
  updateImportantAnchors()
}

function updateProtocol() {
  const anchorHTMLCollection = document.getElementsByTagName('a')

  for (const anchor of anchorHTMLCollection) {
    const href = anchor.href
    const url = new URL(href)

    url.protocol = 'https'
    const newHref = url.toString()

    anchor.href = newHref
  }
}

function updateParagraphClassName() {
  const paragraphHTMLCollection = document.getElementsByTagName('p')

  for (const paragraph of paragraphHTMLCollection) {
    const token = 'importante'
    const newToken = 'resaltado'
    const defaultToken = 'normal'

    if (paragraph.classList.contains(token)) {
      paragraph.classList.replace(token, newToken)
    } else {
      paragraph.classList.add(defaultToken)
    }
  }
}

function updateImportantAnchors() {
  const anchorsNodeList = document.querySelectorAll('a.importante')
  let i = 0

  for (const anchor of anchorsNodeList) {
    const nameValue = 'importante' + i
    anchor.name = nameValue
    i++
  }
}

const produto1 = ['Notebook', 2500]
const produto2: [string, number] = ['Notebook', 2500]

if (typeof produto1[0] === 'string') {
  console.log(produto1[0].toLowerCase())
}

const [nome, preco] = produto2

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector)

  if (el) {
    return [el, el.innerText] as const
  } else {
    return null
  }
}

const button = getText('button')

if (button) {
  button[0]
}

console.log(button)
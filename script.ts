const { body }: { body: HTMLElement } = document

interface Produto {
  nome: string;
  preco?: number;
}

function handleData({ nome, preco }: Produto) {
  nome.includes('book')
  preco?.toFixed()
}

handleData({
  nome: 'Notebook'
})




function handleClick({ currentTarget, pageX }: { currentTarget: EventTarget | null; pageX: number }) {
  if (currentTarget instanceof HTMLElement) {
    console.log(currentTarget)
    currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`
  }
}

document.documentElement.addEventListener('click', handleClick)
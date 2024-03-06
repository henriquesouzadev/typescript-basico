interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json')
  const json = await response.json() as Promise<Produto>
  return json
}

async function handleProduto() {
  const produto = await fetchProduto()
  console.log(produto.nome)
}

handleProduto()
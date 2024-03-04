interface Produto {
  nome: string;
  preco: number;
}

function isProduto(value: unknown): value is Produto {
  if (value) {
    return true
  } else {
    return false
  }
}

function handleProduto(data: unknown) {
  if (isProduto(data)) {
    console.log(data)
  }
}
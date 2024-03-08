console.log(document.constructor)

class Produto {
  // public: é o padrão para qualquer uma
  // private: só pode ser acessada dentro da classe
  // protected: só pode ser acessada dentro da classe e da subclasse
  readonly tipo = 'produto'
  nome: string
  private preco: number 

  constructor(nome: string, preco: number) {
    this.nome = nome
    this.preco = preco
  }

  getPreco() {
    return Produto.transformarPreco(this.preco)
  }

  static transformarPreco(preco: number) {
    return `R$ ${preco}`
  }
}

const livro = new Produto('O Senhor dos Anéis', 300)

console.log(livro.getPreco())

class Quadrado {
  readonly lados = 4
  medida: number

  constructor(medida: number) {
    this.medida = medida
  }

  getPerimetro() {
    return this.medida * this.lados
  }
  getArea() {
    return this.medida * this.medida
  }
}

class Circulo {
  readonly PI = Math.PI
  raio: number

  constructor(raio: number) {
    this.raio = raio
  }

  getPerimetro() {
    return Math.round(2 * this.PI * this.raio * 100) / 100
  }
  getArea() {
    return Math.round(this.PI * (this.raio * this.raio) * 100) / 100
  }
}

const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
  if (n < 15) {
    return new Quadrado(n)
  } else {
    return new Circulo(n)
  }
})

formas.forEach((forma) => {
  if (forma instanceof Quadrado) {
    console.log(forma.getArea())
  }
  if (forma instanceof Circulo) {
    console.log(forma.getPerimetro())
  }
}) 
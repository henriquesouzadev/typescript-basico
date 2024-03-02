const numeros = [1, 2, 3, 4, 5, 6, 7]
const frutas = ['maça', 'uva', 'pêra', 'laranja', 'limão']

function firstFive<T>(lista: T[]): T[] {
  return lista.slice(0, 5)
}

console.log(firstFive(numeros))
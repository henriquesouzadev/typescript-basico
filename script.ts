function arredondar(valor: string): string
function arredondar(valor: number): number
function arredondar(valor: number | string): number | string {
  if (typeof valor === 'string') {
    return `${Math.ceil(Number(valor))}`
  } else {
    return Math.ceil(valor)
  }
}

console.log(arredondar(204.43))
console.log(arredondar('203.23'))
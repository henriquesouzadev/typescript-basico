type TransacaoValor = Transacao & {
  valor: number;
}

function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null
}

export class Estatisticas {
  private transacoes;
  total;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
  }

  private setTotal() {
    const filtrado = this.transacoes
      .filter(filtrarValor)
      .reduce((acc, item) => {
        return acc + item.valor
      }, 0)

    return filtrado
  }
}
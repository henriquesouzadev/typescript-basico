import { countBy } from "./countBy.js";

type TransacaoValor = Transacao & {
  valor: number;
}

function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null
}

export class Estatisticas {
  private transacoes;
  total;
  pagamento;
  status;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamentos();
    this.status = this.setStatus();
  }

  private setTotal() {
    const filtrado = this.transacoes
      .filter(filtrarValor)
      .reduce((acc, item) => {
        return acc + item.valor
      }, 0)

    return filtrado
  }

  private setPagamentos() {
    const pagamentos = this.transacoes.map(({ pagamento }) => pagamento)
    return countBy(pagamentos)
  }

  private setStatus() {
    const status = this.transacoes.map(({ status }) => status)
    return countBy(status)
  }
}
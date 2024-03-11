function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export class Estatisticas {
    transacoes;
    total;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
    }
    setTotal() {
        const filtrado = this.transacoes
            .filter(filtrarValor)
            .reduce((acc, item) => {
            return acc + item.valor;
        }, 0);
        return filtrado;
    }
}

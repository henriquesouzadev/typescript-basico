import { countBy } from "./countBy.js";
function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export class Estatisticas {
    transacoes;
    total;
    pagamento;
    status;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamentos();
        this.status = this.setStatus();
    }
    setTotal() {
        const filtrado = this.transacoes
            .filter(filtrarValor)
            .reduce((acc, item) => {
            return acc + item.valor;
        }, 0);
        return filtrado;
    }
    setPagamentos() {
        const pagamentos = this.transacoes.map(({ pagamento }) => pagamento);
        return countBy(pagamentos);
    }
    setStatus() {
        const status = this.transacoes.map(({ status }) => status);
        return countBy(status);
    }
}

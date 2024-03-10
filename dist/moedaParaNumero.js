/**
 * Recebe string '1.200.00' retorna number: 1200.50
 * @param moeda
 * @returns
 */
export function moedaParaNumero(moeda) {
    const numero = Number(moeda.replaceAll('.', '').replace(',', '.'));
    return isNaN(numero) ? null : numero;
}

"use strict";
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
function somarVendas(vendas) {
    const total = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    document.body.innerHTML += `<p>Total: ${total}</p>`;
}
async function getVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const json = await response.json();
    somarVendas(json);
}
getVendas();

"use strict";
function comparar(tipo, ...numeros) {
    if (tipo === 'menor') {
        return Math.min(...numeros);
    }
    if (tipo === 'maior') {
        return Math.max(...numeros);
    }
}
console.log(comparar('maior', 1, 5, 10, 14, 21));
console.log(comparar('menor', 1, 5, 10, 14, 21));

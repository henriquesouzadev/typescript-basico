"use strict";
function arredondar(valor) {
    if (typeof valor === 'string') {
        return `${Math.ceil(Number(valor))}`;
    }
    else {
        return Math.ceil(valor);
    }
}
console.log(arredondar(204.43));
console.log(arredondar('203.23'));

"use strict";
/**
 * Diferente do "any" o "unknown" não deixa ativar qualquer método ou propriedade de um valor,
 * somente quando tiver a type safety
 */
function typeGuard(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
}
typeGuard(200);
typeGuard('Teste');

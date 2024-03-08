"use strict";
const produto1 = ['Notebook', 2500];
const produto2 = ['Notebook', 2500];
if (typeof produto1[0] === 'string') {
    console.log(produto1[0].toLowerCase());
}
const [nome, preco] = produto2;
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const button = getText('button');
if (button) {
    button[0];
}
console.log(button);

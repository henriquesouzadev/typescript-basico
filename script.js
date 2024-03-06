"use strict";
const { body } = document;
function handleData({ nome, preco }) {
    nome.includes('book');
    preco === null || preco === void 0 ? void 0 : preco.toFixed();
}
handleData({
    nome: 'Notebook'
});
function handleClick({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        console.log(currentTarget);
        currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`;
    }
}
document.documentElement.addEventListener('click', handleClick);

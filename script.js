"use strict";
const artigo = {
    titulo: 'Teste',
    visualizacoes: 3000,
    tags: ['html', 'js'],
    autor: 'Andre'
};
function mostrarTitulo(obj) {
    if ('titulo' in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo({
    titulo: 'teste',
});

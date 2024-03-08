interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
}

interface ObjetoLiteral {
  [key: string]: unknown;
}

const artigo: Post = {
  titulo: 'Teste',
  visualizacoes: 30000,
  tags: ['html', 'js'],
  autor: 'Andre'
}

type ObjetoLiteral2 = Record<string, string>

function mostrarTitulo(obj: ObjetoLiteral2) {
  if ('titulo' in obj) {
    console.log(obj.titulo)
  }
}

mostrarTitulo({
  titulo: 'teste',
})


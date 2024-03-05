interface InterfaceCurso {
  nome: string;
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: "iniciante" | "avancado";
  tags: string[];
}

function isCurso(value: unknown): value is InterfaceCurso {
  if (value && typeof value === 'object' && 'nome' in value && 'horas' in value && 'tags' in value) {
    return true
  } else {
    return false
  }
}

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    data.filter(isCurso).forEach(item => {
      document.body.innerHTML += `
        <div>
          <h2>${item.nome}</h2>
          <p>${item.horas}</p>
        </div>
      `
    })
  }
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json')
  const json = await response.json()
  handleCursos(json)
}

fetchCursos()
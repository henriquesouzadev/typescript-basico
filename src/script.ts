import { Estatisticas } from "./Estatisticas.js";
import { CountList } from "./countBy.js";
import fetchData from "./fetchData.js";
import { normalizarTransacao } from "./normalizarTransacao.js";

function preencherLista(lista: CountList, containerId: string): void {
  const containerElement = document.getElementById(containerId)

  if (containerElement) {
    const keys = Object.keys(lista)
    keys.forEach(key => {
      containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`
    })
  }
}

function preencherEstatisticas(transacoes: Transacao[]): void {
  const data = new Estatisticas(transacoes)
  console.log(data)

  preencherLista(data.pagamento, 'pagamento')
  preencherLista(data.status, 'status')

  const totalElement = document.querySelector<HTMLElement>("#total span")
  if (totalElement) {
    totalElement.innerText = data.total.toLocaleString("pt-BR", {
      style: "currency",  
      currency: "BRL"
    })
  }

  const diaElement = document.querySelector<HTMLElement>("#dia span")
  if (diaElement) {
    diaElement.innerText = data.melhorDia[0]
  }
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#transacoes tbody")
  if (!tabela) return 

  transacoes.forEach((transacao) => {
    tabela.innerHTML += `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td>R$ ${transacao.moeda}</td>
        <td>${transacao.pagamento}</td>
        <td>${transacao.status}</td>
      </tr>
    `
  })
}

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json?')
  if (!data) return

  const transacoes = data.map(normalizarTransacao)

  preencherTabela(transacoes)
  preencherEstatisticas(transacoes)
}

handleData()
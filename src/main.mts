import { Faixa } from "./model/faixa"
import { FaixaApiService } from "./service/faixa-api.service"

const inputFaixa = document.querySelector('#iptFaixa') as HTMLInputElement
const buttonAdicionar: HTMLButtonElement = document.querySelector('#btnAdicionar')
const selectFaixa: HTMLSelectElement = document.querySelector('#selectFaixa')

buttonAdicionar.addEventListener('click', handleAdicionar)

const faixaApiService = new FaixaApiService()

function handleAdicionar() {
    const faixa = new Faixa(inputFaixa.value)
    console.log('adicionando', faixa )

    const option = document.createElement('option')
    option.value = faixa.nome
    option.text = faixa.nome
    selectFaixa.appendChild(option)

    faixaApiService.addFaixa(faixa)
    console.log(faixaApiService.getFaixas())
}

console.log('iniciando programa')



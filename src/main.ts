import { Faixa } from "./model/faixa.js"
import { Golpe } from "./model/golpe.js"
import { FaixaApiService } from "./service/faixa-api.service.js"

console.log('iniciando programa') 

// lógica para adicionar Faixa
const inputFaixa = document.querySelector('#iptFaixa') as HTMLInputElement
const buttonAdicionarFaixa: HTMLButtonElement = document.querySelector('#btnAdicionarFaixa')
const selectFaixa: HTMLSelectElement = document.querySelector('#selectFaixa')

buttonAdicionarFaixa.addEventListener('click', handleAdicionarFaixa)

const faixaApiService = new FaixaApiService()
console.log("Faixas armazendas: ", faixaApiService)

function loadSelectFaixas() {
    faixaApiService.getFaixas().forEach(faixa => {
        const option = document.createElement('option')
        option.value = faixa.nome
        option.text = faixa.nome
        selectFaixa.appendChild(option)
    })
}

function handleAdicionarFaixa() {
    const faixa = new Faixa(inputFaixa.value)
    console.log('adicionando', faixa )

    const option = document.createElement('option')
    option.value = faixa.nome
    option.text = faixa.nome
    selectFaixa.appendChild(option)

    faixaApiService.addFaixa(faixa)
    console.log('Faixas armazenadas: ', faixaApiService.getFaixas())
}

// lógica para adicionar golpe

const inputGolpe = document.querySelector('#iptGolpe') as HTMLInputElement
const buttonAdicionarGolpe: HTMLButtonElement = document.querySelector('#btnAdicionarGolpe')
const selectGolpe: HTMLSelectElement = document.querySelector('#selectGolpe')

buttonAdicionarGolpe.addEventListener('click', handleAdicionarGolpe)

function handleAdicionarGolpe() {
    //pegar a faixa amarela que está no localStorage
    //pegar do Faixa service
    const faixa = faixaApiService.getFaixaByName(selectFaixa.value)
    
    const golpe = new Golpe(inputGolpe.value)
    faixa.adicionarGolpe(golpe)
    console.log('adicionando golpe', faixa )

    // const option = document.createElement('option')
    // option.value = golpe.nome
    // selectFaixa.appendChild(option)

    // faixaApiService.addFaixa(golpe)
    // console.log('Faixas armazenadas: ', faixaApiService.getFaixas())
}

loadSelectFaixas()




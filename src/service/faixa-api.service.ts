// import { RepeatedValueException } from "src/exception/exception.exception";
import { Faixa } from "src/model/faixa.js";

export class FaixaApiService {
    private faixas: Faixa[]

    constructor() {
        const jsonFaixas = JSON.parse(localStorage.getItem('faixas')) as Faixa[] ?? []
        this.faixas = jsonFaixas.map(jsonFaixa => new Faixa(jsonFaixa.nome))
    }

    
    addFaixa(faixa: Faixa): void {
        if (this.faixas.find((faixaDb) => faixa.nome === faixaDb.nome)) throw new Error(`Faixa ${faixa} já existe`)
        this.faixas.push(faixa)
        localStorage.setItem('faixas', JSON.stringify(this.faixas))
    }
    
    getFaixas(): Faixa[] {
        return JSON.parse(JSON.stringify(this.faixas))
    }

    getFaixaByName(nome: string): Faixa {
        return this.faixas.find(faixa => faixa.nome === nome)
    }

}
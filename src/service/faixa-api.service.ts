import { Faixa } from "src/model/faixa";

export class FaixaApiService {
    private faixas: Faixa[]

    constructor() {
        this.faixas = JSON.parse(localStorage.getItem('faixas'))
    }

    getFaixas(): Faixa[] {
        return JSON.parse(JSON.stringify(this.faixas))
    }

    addFaixa(faixa: Faixa): void {
        this.faixas.push(faixa)
        localStorage.setItem('faixas', JSON.stringify(this.faixas))
    }
}
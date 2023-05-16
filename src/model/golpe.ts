export class Golpe {
    id: number

    constructor(public nome: string, public implementacao?: string, public descricao?: string) {
        this.id = Math.floor(Math.random() * 100000000)
    }
}
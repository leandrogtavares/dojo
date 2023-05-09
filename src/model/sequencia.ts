import { InvalidArgumentValueException } from "../exception/exception.exception"
import { Golpe } from "./golpe"

export class Sequencia {
    id: number
    nome: string
    private golpes: Golpe[]
    
    constructor(nome: string) {
        this.nome = nome
    }

    adicionarGolpe(golpe: Golpe): void {
        if (!golpe) throw new InvalidArgumentValueException("Argumento golpe não pode ser nulo");
        if (!golpe.nome) throw new InvalidArgumentValueException("Golpe não pode ter nome nulo");
        this.golpes.push(golpe)
    }

    getGolpes(): Golpe[] {
       return JSON.parse(JSON.stringify(this.golpes))
    }
}

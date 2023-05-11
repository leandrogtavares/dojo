import { InvalidArgumentValueException } from "../exception/exception.exception.js";
import { Golpe } from "./golpe";
import { Sequencia } from "./sequencia";

export class Faixa {
    private golpes: Golpe[]
    private sequencias: Sequencia[]

    constructor(public nome: string) { }

    adicionarGolpe(golpe: Golpe): void {
        if (!golpe) throw new InvalidArgumentValueException("Argumento golpe não pode ser nulo");
        if (!golpe.nome) throw new InvalidArgumentValueException("Golpe não pode ter nome nulo");
        this.golpes.push(golpe)
    }

    getGolpes(): Golpe[] {
        return JSON.parse(JSON.stringify(this.golpes))
    }

    adicionarSequencia(sequencia: Sequencia): void {
        if (!sequencia?.getGolpes()?.length) throw new InvalidArgumentValueException("Argumento sequencia não pode ser nulo ou vazio");
        this.sequencias.push(sequencia)
    }

    getSequencias(): Sequencia[] {
        return JSON.parse(JSON.stringify(this.sequencias))
    }

}
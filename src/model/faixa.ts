import { InvalidArgumentValueException } from "../exception/exception.exception.js";
import { Golpe } from "./golpe";
import { Sequencia } from "./sequencia";

export class Faixa {
    private golpes: Golpe[]
    private sequencias: Sequencia[]

    constructor(public nome: string) {}

    toString() {
        return JSON.stringify(this)
    }

    adicionarGolpe(novoGolpe: Golpe): void {
        if (!novoGolpe) throw new InvalidArgumentValueException("Argumento golpe não pode ser nulo")
        if (!novoGolpe.nome) throw new InvalidArgumentValueException("Golpe não pode ter nome nulo")
        if (!this.golpes) this.golpes = []

        if(this.golpes.find(golpe => novoGolpe.nome === golpe.nome)) throw new InvalidArgumentValueException(`Golpe ${novoGolpe.nome} já existe`);
        
        this.golpes.push(novoGolpe)
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
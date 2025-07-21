import {CodeableConcept} from "./codeable-concept";
import {Code} from "./code";
import {Period} from "./period";
import {Reference} from "./reference";
import {Type} from 'class-transformer'

export class Identifier {
    
    @Type(() => Code)
    use?: Code

    type?: CodeableConcept

    system?: string

    value?: string

    period?: Period

    assigner?: Reference

    constructor(properties: Partial<Identifier>) {
        Object.assign(this,  properties)
    }
}


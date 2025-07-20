import {CodeableConcept} from "./codeable-concept";
import {Code} from "./code";
import {Period} from "./period";
import {Reference} from "./reference";

export class Identifier {

    use?: Code

    type?: CodeableConcept

    system?: string

    value?: string

    period?: Period

    assigner?: Reference
}

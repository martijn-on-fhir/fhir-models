import {Identifier} from "../elements/identifier";
import {HumanName} from "../elements/human-name";
import {ContactPoint} from "../elements/contact-point";
import {Address} from "../elements/address";
import {Code} from "../elements/code";
import {Attachment} from "../elements/attachment";
import {CodeableConcept} from "../elements/codeable-concept";

export class Practitioner {

    identifier?: Identifier

    active?: boolean

    name?: HumanName[]

    telecom?: ContactPoint[]

    address?: Address[]

    gender?: Code

    birthDate?: string

    photo?: Attachment[]

   //  qualification		0..*	BackboneElement

    communication?: CodeableConcept[]

}

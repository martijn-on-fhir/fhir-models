import {Identifier} from "../elements/identifier";
import {HumanName} from "../elements/human-name";
import {ContactPoint} from "../elements/contact-point";
import {Address} from "../elements/address";
import {Code} from "../elements/code";
import {Attachment} from "../elements/attachment";
import {CodeableConcept} from "../elements/codeable-concept";
import {DomainResource} from "./domain-resource";
import {IsDateString, IsOptional} from "class-validator";

export class Practitioner extends DomainResource {

    identifier: Identifier[] = []

    active: boolean = true

    name: HumanName[] = []

    telecom: ContactPoint[] = []

    address: Address[] = []

    gender?: Code

    @IsOptional()
    @IsDateString()
    birthDate?: string

    photo: Attachment[] = []

   //  qualification		0..*	BackboneElement

    communication: CodeableConcept[] = []

    constructor(properties?: Partial<Practitioner>) {

        super();
        Object.assign(this,  properties)
    }

}

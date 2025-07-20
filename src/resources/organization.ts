import {DomainResource} from "./domain-resource";
import {Identifier} from "../elements/identifier";
import {CodeableConcept} from "../elements/codeable-concept";
import {Address} from "../elements/address";
import {ContactPoint} from "../elements/contact-point";
import { Reference } from "../elements/reference";

export class Organization extends DomainResource {

    identifier: Identifier[] = []

    active: boolean = true

    type?: CodeableConcept

    name?: string

    alias?: string

    telecom: ContactPoint[] = []

    addres: Address[] = []

    partOf?: Reference

   //  contact		0..*	BackboneElement

    endpoint?: Reference

    constructor(properties: Partial<Organization>) {

        super()
        Object.assign(this,  properties)
    }
}

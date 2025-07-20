import {Identifier} from "../elements/identifier";
import {HumanName} from "../elements/human-name";
import {ContactPoint} from "../elements/contact-point";
import {Code} from "../elements/code";
import {Address} from "../elements/address";
import {CodeableConcept} from "../elements/codeable-concept";
import {Attachment} from "../elements/attachment";
import {Reference} from "../elements/reference";
import {Resource} from "./resource";
import {DomainResource} from "./domain-resource";

export class Patient extends DomainResource {

    identifier?: Identifier[]

    active?: boolean = true

    name?: HumanName[]

    telecom?: ContactPoint[]

    gender?: Code

    birthDate?: string

    // deceased[x]	Σ ?!	0..1

    address?: Address[]

    maritalStatus?: CodeableConcept

    //   multipleBirth[x]		0..1

    photo?: Attachment[]

//     contact	C	0..*	BackboneElement

//     communication		0..*	BackboneElement

    generalPractitioner?: Reference[]

    managingOrganization?: Resource

    //   link	Σ ?!	0..*	BackboneElement

    constructor(properties?: Partial<Patient>) {

        super();
        Object.assign(this, properties)
    }
}

import {Identifier} from "../elements/identifier";
import {HumanName} from "../elements/human-name";
import {ContactPoint} from "../elements/contact-point";
import {Code} from "../elements/code";
import {Address} from "../elements/address";
import {CodeableConcept} from "../elements/codeable-concept";
import {Attachment} from "../elements/attachment";
import { Reference } from "../elements/reference";
import {Resource} from "./resource";

export class Patient {

    identifier?: Identifier[]

    active?: boolean

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
}

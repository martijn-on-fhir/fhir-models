import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { HumanName } from '../elements/HumanName';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { RelatedPersonCommunication } from '../backbone/RelatedPersonCommunication';
export declare class RelatedPerson extends DomainResource {
    readonly resourceType: "RelatedPerson";
    active?: boolean;
    _active?: Element;
    address?: Address[];
    birthDate?: string;
    _birthDate?: Element;
    communication?: RelatedPersonCommunication[];
    gender?: ('male' | 'female' | 'other' | 'unknown');
    _gender?: Element;
    identifier?: Identifier[];
    name?: HumanName[];
    patient?: Reference;
    period?: Period;
    photo?: Attachment[];
    relationship?: CodeableConcept[];
    telecom?: ContactPoint[];
    constructor(source?: Partial<RelatedPerson>);
}
//# sourceMappingURL=RelatedPerson.d.ts.map
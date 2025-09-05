import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { HumanName } from '../elements/HumanName';
import { Identifier } from '../elements/Identifier';
import { PractitionerQualification } from '../backbone/PractitionerQualification';
export declare class Practitioner extends DomainResource {
    readonly resourceType: "Practitioner";
    active?: boolean;
    _active?: Element;
    address?: Address[];
    birthDate?: string;
    _birthDate?: Element;
    communication?: CodeableConcept[];
    gender?: ('male' | 'female' | 'other' | 'unknown');
    _gender?: Element;
    identifier?: Identifier[];
    name?: HumanName[];
    photo?: Attachment[];
    qualification?: PractitionerQualification[];
    telecom?: ContactPoint[];
    constructor(source?: Partial<Practitioner>);
}
//# sourceMappingURL=Practitioner.d.ts.map
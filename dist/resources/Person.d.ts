import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { Attachment } from '../elements/Attachment';
import { ContactPoint } from '../elements/ContactPoint';
import { HumanName } from '../elements/HumanName';
import { Identifier } from '../elements/Identifier';
import { PersonLink } from '../backbone/PersonLink';
import { Reference } from '../elements/Reference';
export declare class Person extends DomainResource {
    readonly resourceType: "Person";
    active?: boolean;
    _active?: Element;
    address?: Address[];
    birthDate?: string;
    _birthDate?: Element;
    gender?: ('male' | 'female' | 'other' | 'unknown');
    _gender?: Element;
    identifier?: Identifier[];
    link?: PersonLink[];
    managingOrganization?: Reference;
    name?: HumanName[];
    photo?: Attachment;
    telecom?: ContactPoint[];
    constructor(source?: Partial<Person>);
}
//# sourceMappingURL=Person.d.ts.map
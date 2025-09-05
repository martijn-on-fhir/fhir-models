import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class Flag extends DomainResource {
    readonly resourceType: "Flag";
    author?: Reference;
    category?: CodeableConcept[];
    code?: CodeableConcept;
    encounter?: Reference;
    identifier?: Identifier[];
    period?: Period;
    status?: ('active' | 'inactive' | 'entered-in-error');
    _status?: Element;
    subject?: Reference;
    constructor(source?: Partial<Flag>);
}
//# sourceMappingURL=Flag.d.ts.map
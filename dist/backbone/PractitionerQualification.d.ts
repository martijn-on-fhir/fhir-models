import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class PractitionerQualification extends BackboneElement {
    code?: CodeableConcept;
    identifier?: Identifier[];
    issuer?: Reference;
    period?: Period;
    constructor(source?: Partial<PractitionerQualification>);
}
//# sourceMappingURL=PractitionerQualification.d.ts.map
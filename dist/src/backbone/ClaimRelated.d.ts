import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class ClaimRelated extends BackboneElement {
    claim?: Reference;
    reference?: Identifier;
    relationship?: CodeableConcept;
    constructor(source?: Partial<ClaimRelated>);
}
//# sourceMappingURL=ClaimRelated.d.ts.map
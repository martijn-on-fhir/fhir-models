import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ClaimPayee extends BackboneElement {
    party?: Reference;
    type?: CodeableConcept;
    constructor(source?: Partial<ClaimPayee>);
}
//# sourceMappingURL=ClaimPayee.d.ts.map
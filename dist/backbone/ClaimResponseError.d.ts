import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
export declare class ClaimResponseError extends BackboneElement {
    code?: CodeableConcept;
    detailSequence?: number;
    itemSequence?: number;
    subDetailSequence?: number;
    constructor(source?: Partial<ClaimResponseError>);
}
//# sourceMappingURL=ClaimResponseError.d.ts.map
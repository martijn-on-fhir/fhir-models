import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
export declare class ClaimResponseItemAdjudication extends BackboneElement {
    amount?: Money;
    category?: CodeableConcept;
    reason?: CodeableConcept;
    value?: number;
    constructor(source?: Partial<ClaimResponseItemAdjudication>);
}
//# sourceMappingURL=ClaimResponseItemAdjudication.d.ts.map
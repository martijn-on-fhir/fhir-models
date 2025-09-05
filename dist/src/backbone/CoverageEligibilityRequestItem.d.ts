import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CoverageEligibilityRequestItemDiagnosis } from './CoverageEligibilityRequestItemDiagnosis';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class CoverageEligibilityRequestItem extends BackboneElement {
    category?: CodeableConcept;
    detail?: Reference[];
    diagnosis?: CoverageEligibilityRequestItemDiagnosis[];
    facility?: Reference;
    modifier?: CodeableConcept[];
    productOrService?: CodeableConcept;
    provider?: Reference;
    quantity?: Quantity;
    supportingInfoSequence?: number[];
    unitPrice?: Money;
    constructor(source?: Partial<CoverageEligibilityRequestItem>);
}
//# sourceMappingURL=CoverageEligibilityRequestItem.d.ts.map
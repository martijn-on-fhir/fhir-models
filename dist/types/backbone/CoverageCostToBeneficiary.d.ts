import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CoverageCostToBeneficiaryException } from './CoverageCostToBeneficiaryException';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
export declare class CoverageCostToBeneficiary extends BackboneElement {
    exception?: CoverageCostToBeneficiaryException[];
    type?: CodeableConcept;
    valueQuantity?: Quantity;
    valueMoney?: Money;
    constructor(source?: Partial<CoverageCostToBeneficiary>);
}
//# sourceMappingURL=CoverageCostToBeneficiary.d.ts.map
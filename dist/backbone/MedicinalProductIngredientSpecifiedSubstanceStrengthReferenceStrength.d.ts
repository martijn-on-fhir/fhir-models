import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Ratio } from '../elements/Ratio';
export declare class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends BackboneElement {
    country?: CodeableConcept[];
    measurementPoint?: string;
    _measurementPoint?: Element;
    strength?: Ratio;
    strengthLowLimit?: Ratio;
    substance?: CodeableConcept;
    constructor(source?: Partial<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength>);
}
//# sourceMappingURL=MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength.d.ts.map
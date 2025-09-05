import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength } from './MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength';
import { Ratio } from '../elements/Ratio';
export declare class MedicinalProductIngredientSpecifiedSubstanceStrength extends BackboneElement {
    concentration?: Ratio;
    concentrationLowLimit?: Ratio;
    country?: CodeableConcept[];
    measurementPoint?: string;
    _measurementPoint?: Element;
    presentation?: Ratio;
    presentationLowLimit?: Ratio;
    referenceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[];
    constructor(source?: Partial<MedicinalProductIngredientSpecifiedSubstanceStrength>);
}
//# sourceMappingURL=MedicinalProductIngredientSpecifiedSubstanceStrength.d.ts.map
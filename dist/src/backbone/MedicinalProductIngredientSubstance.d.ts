import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductIngredientSpecifiedSubstanceStrength } from './MedicinalProductIngredientSpecifiedSubstanceStrength';
export declare class MedicinalProductIngredientSubstance extends BackboneElement {
    code?: CodeableConcept;
    strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];
    constructor(source?: Partial<MedicinalProductIngredientSubstance>);
}
//# sourceMappingURL=MedicinalProductIngredientSubstance.d.ts.map
import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductIngredientSpecifiedSubstanceStrength } from './MedicinalProductIngredientSpecifiedSubstanceStrength';
export declare class MedicinalProductIngredientSpecifiedSubstance extends BackboneElement {
    code?: CodeableConcept;
    confidentiality?: CodeableConcept;
    group?: CodeableConcept;
    strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];
    constructor(source?: Partial<MedicinalProductIngredientSpecifiedSubstance>);
}
//# sourceMappingURL=MedicinalProductIngredientSpecifiedSubstance.d.ts.map
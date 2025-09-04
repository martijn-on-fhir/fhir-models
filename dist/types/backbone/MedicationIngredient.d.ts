import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Ratio } from '../elements/Ratio';
import { Reference } from '../elements/Reference';
export declare class MedicationIngredient extends BackboneElement {
    isActive?: boolean;
    _isActive?: Element;
    itemCodeableConcept?: CodeableConcept;
    itemReference?: Reference;
    strength?: Ratio;
    constructor(source?: Partial<MedicationIngredient>);
}
//# sourceMappingURL=MedicationIngredient.d.ts.map
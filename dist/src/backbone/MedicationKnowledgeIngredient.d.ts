import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Ratio } from '../elements/Ratio';
import { Reference } from '../elements/Reference';
export declare class MedicationKnowledgeIngredient extends BackboneElement {
    isActive?: boolean;
    _isActive?: Element;
    itemCodeableConcept?: CodeableConcept;
    itemReference?: Reference;
    strength?: Ratio;
    constructor(source?: Partial<MedicationKnowledgeIngredient>);
}
//# sourceMappingURL=MedicationKnowledgeIngredient.d.ts.map
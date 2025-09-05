import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Ratio } from '../elements/Ratio';
import { Reference } from '../elements/Reference';
export declare class SubstanceIngredient extends BackboneElement {
    quantity?: Ratio;
    substanceCodeableConcept?: CodeableConcept;
    substanceReference?: Reference;
    constructor(source?: Partial<SubstanceIngredient>);
}
//# sourceMappingURL=SubstanceIngredient.d.ts.map
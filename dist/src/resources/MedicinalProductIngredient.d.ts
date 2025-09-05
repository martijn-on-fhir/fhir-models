import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MedicinalProductIngredientSpecifiedSubstance } from '../backbone/MedicinalProductIngredientSpecifiedSubstance';
import { MedicinalProductIngredientSubstance } from '../backbone/MedicinalProductIngredientSubstance';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductIngredient extends DomainResource {
    readonly resourceType: "MedicinalProductIngredient";
    allergenicIndicator?: boolean;
    _allergenicIndicator?: Element;
    identifier?: Identifier;
    manufacturer?: Reference[];
    role?: CodeableConcept;
    specifiedSubstance?: MedicinalProductIngredientSpecifiedSubstance[];
    substance?: MedicinalProductIngredientSubstance;
    constructor(source?: Partial<MedicinalProductIngredient>);
}
//# sourceMappingURL=MedicinalProductIngredient.d.ts.map
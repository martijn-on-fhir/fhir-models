import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { NutritionOrderEnteralFormula } from '../backbone/NutritionOrderEnteralFormula';
import { NutritionOrderOralDiet } from '../backbone/NutritionOrderOralDiet';
import { NutritionOrderSupplement } from '../backbone/NutritionOrderSupplement';
import { Reference } from '../elements/Reference';
export declare class NutritionOrder extends DomainResource {
    readonly resourceType: "NutritionOrder";
    allergyIntolerance?: Reference[];
    dateTime?: string;
    _dateTime?: Element;
    encounter?: Reference;
    enteralFormula?: NutritionOrderEnteralFormula;
    excludeFoodModifier?: CodeableConcept[];
    foodPreferenceModifier?: CodeableConcept[];
    identifier?: Identifier[];
    instantiates?: string[];
    _instantiates?: Element[];
    instantiatesCanonical?: string[];
    _instantiatesCanonical?: Element[];
    instantiatesUri?: string[];
    _instantiatesUri?: Element[];
    intent?: ('proposal' | 'plan' | 'directive' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option');
    _intent?: Element;
    note?: Annotation[];
    oralDiet?: NutritionOrderOralDiet;
    orderer?: Reference;
    patient?: Reference;
    status?: ('draft' | 'active' | 'on-hold' | 'revoked' | 'completed' | 'entered-in-error' | 'unknown');
    _status?: Element;
    supplement?: NutritionOrderSupplement[];
    constructor(source?: Partial<NutritionOrder>);
}
//# sourceMappingURL=NutritionOrder.d.ts.map
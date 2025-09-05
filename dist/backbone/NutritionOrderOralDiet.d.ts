import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { NutritionOrderOralDietNutrient } from './NutritionOrderOralDietNutrient';
import { NutritionOrderOralDietTexture } from './NutritionOrderOralDietTexture';
import { Timing } from './Timing';
export declare class NutritionOrderOralDiet extends BackboneElement {
    fluidConsistencyType?: CodeableConcept[];
    instruction?: string;
    _instruction?: Element;
    nutrient?: NutritionOrderOralDietNutrient[];
    schedule?: Timing[];
    texture?: NutritionOrderOralDietTexture[];
    type?: CodeableConcept[];
    constructor(source?: Partial<NutritionOrderOralDiet>);
}
//# sourceMappingURL=NutritionOrderOralDiet.d.ts.map
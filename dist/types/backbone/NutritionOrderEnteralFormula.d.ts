import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { NutritionOrderEnteralFormulaAdministration } from './NutritionOrderEnteralFormulaAdministration';
import { Quantity } from '../elements/Quantity';
export declare class NutritionOrderEnteralFormula extends BackboneElement {
    additiveProductName?: string;
    _additiveProductName?: Element;
    additiveType?: CodeableConcept;
    administration?: NutritionOrderEnteralFormulaAdministration[];
    administrationInstruction?: string;
    _administrationInstruction?: Element;
    baseFormulaProductName?: string;
    _baseFormulaProductName?: Element;
    baseFormulaType?: CodeableConcept;
    caloricDensity?: Quantity;
    maxVolumeToDeliver?: Quantity;
    routeofAdministration?: CodeableConcept;
    constructor(source?: Partial<NutritionOrderEnteralFormula>);
}
//# sourceMappingURL=NutritionOrderEnteralFormula.d.ts.map
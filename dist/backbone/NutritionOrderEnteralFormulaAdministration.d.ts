import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Quantity } from '../elements/Quantity';
import { Ratio } from '../elements/Ratio';
import { Timing } from './Timing';
export declare class NutritionOrderEnteralFormulaAdministration extends BackboneElement {
    quantity?: Quantity;
    rateQuantity?: Quantity;
    rateRatio?: Ratio;
    schedule?: Timing;
    constructor(source?: Partial<NutritionOrderEnteralFormulaAdministration>);
}
//# sourceMappingURL=NutritionOrderEnteralFormulaAdministration.d.ts.map
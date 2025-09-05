import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Timing } from './Timing';
export declare class NutritionOrderSupplement extends BackboneElement {
    instruction?: string;
    _instruction?: Element;
    productName?: string;
    _productName?: Element;
    quantity?: Quantity;
    schedule?: Timing[];
    type?: CodeableConcept;
    constructor(source?: Partial<NutritionOrderSupplement>);
}
//# sourceMappingURL=NutritionOrderSupplement.d.ts.map
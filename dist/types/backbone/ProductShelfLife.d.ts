import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Quantity } from '../elements/Quantity';
export declare class ProductShelfLife extends BackboneElement {
    identifier?: Identifier;
    period?: Quantity;
    specialPrecautionsForStorage?: CodeableConcept[];
    type?: CodeableConcept;
    constructor(source?: Partial<ProductShelfLife>);
}
//# sourceMappingURL=ProductShelfLife.d.ts.map
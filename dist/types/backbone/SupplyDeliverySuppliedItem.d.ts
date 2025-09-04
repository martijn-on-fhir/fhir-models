import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class SupplyDeliverySuppliedItem extends BackboneElement {
    itemCodeableConcept?: CodeableConcept;
    itemReference?: Reference;
    quantity?: Quantity;
    constructor(source?: Partial<SupplyDeliverySuppliedItem>);
}
//# sourceMappingURL=SupplyDeliverySuppliedItem.d.ts.map
import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ProdCharacteristic } from '../backbone/ProdCharacteristic';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductManufactured extends DomainResource {
    readonly resourceType: "MedicinalProductManufactured";
    ingredient?: Reference[];
    manufacturedDoseForm?: CodeableConcept;
    manufacturer?: Reference[];
    otherCharacteristics?: CodeableConcept[];
    physicalCharacteristics?: ProdCharacteristic;
    quantity?: Quantity;
    unitOfPresentation?: CodeableConcept;
    constructor(source?: Partial<MedicinalProductManufactured>);
}
//# sourceMappingURL=MedicinalProductManufactured.d.ts.map
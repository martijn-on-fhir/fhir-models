import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { ProdCharacteristic } from './ProdCharacteristic';
import { ProductShelfLife } from './ProductShelfLife';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductPackagedPackageItem extends BackboneElement {
    alternateMaterial?: CodeableConcept[];
    device?: Reference[];
    identifier?: Identifier[];
    manufacturedItem?: Reference[];
    manufacturer?: Reference[];
    material?: CodeableConcept[];
    otherCharacteristics?: CodeableConcept[];
    packageItem?: MedicinalProductPackagedPackageItem[];
    physicalCharacteristics?: ProdCharacteristic;
    quantity?: Quantity;
    shelfLifeStorage?: ProductShelfLife[];
    type?: CodeableConcept;
    constructor(source?: Partial<MedicinalProductPackagedPackageItem>);
}
//# sourceMappingURL=MedicinalProductPackagedPackageItem.d.ts.map
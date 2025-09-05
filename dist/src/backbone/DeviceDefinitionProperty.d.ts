import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
export declare class DeviceDefinitionProperty extends BackboneElement {
    type?: CodeableConcept;
    valueCode?: CodeableConcept[];
    valueQuantity?: Quantity[];
    constructor(source?: Partial<DeviceDefinitionProperty>);
}
//# sourceMappingURL=DeviceDefinitionProperty.d.ts.map
import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
export declare class DeviceRequestParameter extends BackboneElement {
    code?: CodeableConcept;
    valueCodeableConcept?: CodeableConcept;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueBoolean?: boolean;
    _valueBoolean?: Element;
    constructor(source?: Partial<DeviceRequestParameter>);
}
//# sourceMappingURL=DeviceRequestParameter.d.ts.map
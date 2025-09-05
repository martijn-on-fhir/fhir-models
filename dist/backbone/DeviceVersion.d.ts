import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
export declare class DeviceVersion extends BackboneElement {
    component?: Identifier;
    type?: CodeableConcept;
    value?: string;
    _value?: Element;
    constructor(source?: Partial<DeviceVersion>);
}
//# sourceMappingURL=DeviceVersion.d.ts.map
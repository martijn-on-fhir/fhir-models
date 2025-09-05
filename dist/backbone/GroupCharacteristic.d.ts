import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Reference } from '../elements/Reference';
export declare class GroupCharacteristic extends BackboneElement {
    code?: CodeableConcept;
    exclude?: boolean;
    _exclude?: Element;
    period?: Period;
    valueCodeableConcept?: CodeableConcept;
    valueBoolean?: boolean;
    _valueBoolean?: Element;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueReference?: Reference;
    constructor(source?: Partial<GroupCharacteristic>);
}
//# sourceMappingURL=GroupCharacteristic.d.ts.map
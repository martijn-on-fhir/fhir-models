import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
export declare class MedicationKnowledgeDrugCharacteristic extends BackboneElement {
    type?: CodeableConcept;
    valueCodeableConcept?: CodeableConcept;
    valueString?: string;
    _valueString?: Element;
    valueQuantity?: Quantity;
    valueBase64Binary?: string;
    _valueBase64Binary?: Element;
    constructor(source?: Partial<MedicationKnowledgeDrugCharacteristic>);
}
//# sourceMappingURL=MedicationKnowledgeDrugCharacteristic.d.ts.map
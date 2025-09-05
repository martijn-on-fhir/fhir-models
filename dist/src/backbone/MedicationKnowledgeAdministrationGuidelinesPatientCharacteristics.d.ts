import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
export declare class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends BackboneElement {
    characteristicCodeableConcept?: CodeableConcept;
    characteristicQuantity?: Quantity;
    value?: string[];
    _value?: Element[];
    constructor(source?: Partial<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics>);
}
//# sourceMappingURL=MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics.d.ts.map
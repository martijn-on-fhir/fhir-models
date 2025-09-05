import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicationKnowledgeAdministrationGuidelinesDosage } from './MedicationKnowledgeAdministrationGuidelinesDosage';
import { MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics } from './MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics';
import { Reference } from '../elements/Reference';
export declare class MedicationKnowledgeAdministrationGuidelines extends BackboneElement {
    dosage?: MedicationKnowledgeAdministrationGuidelinesDosage[];
    indicationCodeableConcept?: CodeableConcept;
    indicationReference?: Reference;
    patientCharacteristics?: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[];
    constructor(source?: Partial<MedicationKnowledgeAdministrationGuidelines>);
}
//# sourceMappingURL=MedicationKnowledgeAdministrationGuidelines.d.ts.map
import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { MedicationKnowledgeRegulatoryMaxDispense } from './MedicationKnowledgeRegulatoryMaxDispense';
import { MedicationKnowledgeRegulatorySchedule } from './MedicationKnowledgeRegulatorySchedule';
import { MedicationKnowledgeRegulatorySubstitution } from './MedicationKnowledgeRegulatorySubstitution';
import { Reference } from '../elements/Reference';
export declare class MedicationKnowledgeRegulatory extends BackboneElement {
    maxDispense?: MedicationKnowledgeRegulatoryMaxDispense;
    regulatoryAuthority?: Reference;
    schedule?: MedicationKnowledgeRegulatorySchedule[];
    substitution?: MedicationKnowledgeRegulatorySubstitution[];
    constructor(source?: Partial<MedicationKnowledgeRegulatory>);
}
//# sourceMappingURL=MedicationKnowledgeRegulatory.d.ts.map
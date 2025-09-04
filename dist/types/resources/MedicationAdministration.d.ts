import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MedicationAdministrationDosage } from '../backbone/MedicationAdministrationDosage';
import { MedicationAdministrationPerformer } from '../backbone/MedicationAdministrationPerformer';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class MedicationAdministration extends DomainResource {
    readonly resourceType: "MedicationAdministration";
    category?: CodeableConcept;
    context?: Reference;
    device?: Reference[];
    dosage?: MedicationAdministrationDosage;
    effectiveDateTime?: string;
    _effectiveDateTime?: Element;
    effectivePeriod?: Period;
    eventHistory?: Reference[];
    identifier?: Identifier[];
    instantiates?: string[];
    _instantiates?: Element[];
    medicationCodeableConcept?: CodeableConcept;
    medicationReference?: Reference;
    note?: Annotation[];
    partOf?: Reference[];
    performer?: MedicationAdministrationPerformer[];
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    request?: Reference;
    status?: ('in-progress' | 'not-done' | 'on-hold' | 'completed' | 'entered-in-error' | 'stopped' | 'unknown');
    _status?: Element;
    statusReason?: CodeableConcept[];
    subject?: Reference;
    supportingInformation?: Reference[];
    constructor(source?: Partial<MedicationAdministration>);
}
//# sourceMappingURL=MedicationAdministration.d.ts.map
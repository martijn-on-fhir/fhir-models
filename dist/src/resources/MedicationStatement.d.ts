import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Dosage } from '../backbone/Dosage';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class MedicationStatement extends DomainResource {
    readonly resourceType: "MedicationStatement";
    basedOn?: Reference[];
    category?: CodeableConcept;
    context?: Reference;
    dateAsserted?: string;
    _dateAsserted?: Element;
    derivedFrom?: Reference[];
    dosage?: Dosage[];
    effectiveDateTime?: string;
    _effectiveDateTime?: Element;
    effectivePeriod?: Period;
    identifier?: Identifier[];
    informationSource?: Reference;
    medicationCodeableConcept?: CodeableConcept;
    medicationReference?: Reference;
    note?: Annotation[];
    partOf?: Reference[];
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    status?: ('active' | 'completed' | 'entered-in-error' | 'intended' | 'stopped' | 'on-hold' | 'unknown' | 'not-taken');
    _status?: Element;
    statusReason?: CodeableConcept[];
    subject?: Reference;
    constructor(source?: Partial<MedicationStatement>);
}
//# sourceMappingURL=MedicationStatement.d.ts.map
import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Dosage } from '../backbone/Dosage';
import { Identifier } from '../elements/Identifier';
import { MedicationRequestDispenseRequest } from '../backbone/MedicationRequestDispenseRequest';
import { Reference } from '../elements/Reference';
export declare class MedicationRequest extends DomainResource {
    readonly resourceType: "MedicationRequest";
    authoredOn?: string;
    _authoredOn?: Element;
    basedOn?: Reference[];
    category?: CodeableConcept[];
    courseOfTherapyType?: CodeableConcept;
    detectedIssue?: Reference[];
    dispenseRequest?: MedicationRequestDispenseRequest;
    doNotPerform?: boolean;
    _doNotPerform?: Element;
    dosageInstruction?: Dosage[];
    encounter?: Reference;
    eventHistory?: Reference[];
    groupIdentifier?: Identifier;
    identifier?: Identifier[];
    instantiatesCanonical?: string[];
    _instantiatesCanonical?: Element[];
    instantiatesUri?: string[];
    _instantiatesUri?: Element[];
    insurance?: Reference[];
    intent?: ('proposal' | 'plan' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option');
    _intent?: Element;
    medicationCodeableConcept?: CodeableConcept;
    medicationReference?: Reference;
    note?: Annotation[];
    performer?: Reference;
    constructor(source?: Partial<MedicationRequest>);
}
//# sourceMappingURL=MedicationRequest.d.ts.map
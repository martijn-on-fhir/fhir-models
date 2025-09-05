import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class DocumentReferenceContext extends BackboneElement {
    encounter?: Reference[];
    event?: CodeableConcept[];
    facilityType?: CodeableConcept;
    period?: Period;
    practiceSetting?: CodeableConcept;
    related?: Reference[];
    sourcePatientInfo?: Reference;
    constructor(source?: Partial<DocumentReferenceContext>);
}
//# sourceMappingURL=DocumentReferenceContext.d.ts.map
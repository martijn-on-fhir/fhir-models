import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductIndicationOtherTherapy extends BackboneElement {
    medicationCodeableConcept?: CodeableConcept;
    medicationReference?: Reference;
    therapyRelationshipType?: CodeableConcept;
    constructor(source?: Partial<MedicinalProductIndicationOtherTherapy>);
}
//# sourceMappingURL=MedicinalProductIndicationOtherTherapy.d.ts.map
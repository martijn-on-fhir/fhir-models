import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductContraindicationOtherTherapy extends BackboneElement {
    medicationCodeableConcept?: CodeableConcept;
    medicationReference?: Reference;
    therapyRelationshipType?: CodeableConcept;
    constructor(source?: Partial<MedicinalProductContraindicationOtherTherapy>);
}
//# sourceMappingURL=MedicinalProductContraindicationOtherTherapy.d.ts.map
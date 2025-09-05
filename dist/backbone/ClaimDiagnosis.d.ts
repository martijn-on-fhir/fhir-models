import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ClaimDiagnosis extends BackboneElement {
    diagnosisCodeableConcept?: CodeableConcept;
    diagnosisReference?: Reference;
    onAdmission?: CodeableConcept;
    packageCode?: CodeableConcept;
    sequence?: number;
    type?: CodeableConcept[];
    constructor(source?: Partial<ClaimDiagnosis>);
}
//# sourceMappingURL=ClaimDiagnosis.d.ts.map
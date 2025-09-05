import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ExplanationOfBenefitDiagnosis extends BackboneElement {
    diagnosisCodeableConcept?: CodeableConcept;
    diagnosisReference?: Reference;
    onAdmission?: CodeableConcept;
    packageCode?: CodeableConcept;
    sequence?: number;
    type?: CodeableConcept[];
    constructor(source?: Partial<ExplanationOfBenefitDiagnosis>);
}
//# sourceMappingURL=ExplanationOfBenefitDiagnosis.d.ts.map
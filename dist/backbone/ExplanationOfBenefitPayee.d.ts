import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ExplanationOfBenefitPayee extends BackboneElement {
    party?: Reference;
    type?: CodeableConcept;
    constructor(source?: Partial<ExplanationOfBenefitPayee>);
}
//# sourceMappingURL=ExplanationOfBenefitPayee.d.ts.map
import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ExplanationOfBenefitCareTeam extends BackboneElement {
    provider?: Reference;
    qualification?: CodeableConcept;
    responsible?: boolean;
    _responsible?: Element;
    role?: CodeableConcept;
    sequence?: number;
    constructor(source?: Partial<ExplanationOfBenefitCareTeam>);
}
//# sourceMappingURL=ExplanationOfBenefitCareTeam.d.ts.map
import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ExplanationOfBenefitProcedure extends BackboneElement {
    date?: string;
    _date?: Element;
    procedureCodeableConcept?: CodeableConcept;
    procedureReference?: Reference;
    sequence?: number;
    type?: CodeableConcept[];
    udi?: Reference[];
    constructor(source?: Partial<ExplanationOfBenefitProcedure>);
}
//# sourceMappingURL=ExplanationOfBenefitProcedure.d.ts.map
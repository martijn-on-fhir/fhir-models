import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
export declare class ExplanationOfBenefitProcessNote extends BackboneElement {
    language?: CodeableConcept;
    number?: number;
    text?: string;
    _text?: Element;
    type?: ('display' | 'print' | 'printoper');
    _type?: Element;
    constructor(source?: Partial<ExplanationOfBenefitProcessNote>);
}
//# sourceMappingURL=ExplanationOfBenefitProcessNote.d.ts.map
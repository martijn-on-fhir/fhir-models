import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class ExplanationOfBenefitSupportingInfo extends BackboneElement {
    category?: CodeableConcept;
    code?: CodeableConcept;
    reason?: Coding;
    sequence?: number;
    timingDate?: string;
    _timingDate?: Element;
    timingPeriod?: Period;
    valueBoolean?: boolean;
    _valueBoolean?: Element;
    valueString?: string;
    _valueString?: Element;
    valueQuantity?: Quantity;
    valueAttachment?: Attachment;
    valueReference?: Reference;
    constructor(source?: Partial<ExplanationOfBenefitSupportingInfo>);
}
//# sourceMappingURL=ExplanationOfBenefitSupportingInfo.d.ts.map
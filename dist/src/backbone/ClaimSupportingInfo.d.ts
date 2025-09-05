import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class ClaimSupportingInfo extends BackboneElement {
    category?: CodeableConcept;
    code?: CodeableConcept;
    reason?: CodeableConcept;
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
    constructor(source?: Partial<ClaimSupportingInfo>);
}
//# sourceMappingURL=ClaimSupportingInfo.d.ts.map
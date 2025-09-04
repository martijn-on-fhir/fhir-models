import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { Coding } from '../elements/Coding';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class ContractTermOfferAnswer extends BackboneElement {
    valueBoolean?: boolean;
    _valueBoolean?: Element;
    valueDecimal?: number;
    valueInteger?: number;
    valueDate?: string;
    _valueDate?: Element;
    valueDateTime?: string;
    _valueDateTime?: Element;
    valueTime?: string;
    _valueTime?: Element;
    valueString?: string;
    _valueString?: Element;
    valueUri?: string;
    _valueUri?: Element;
    valueAttachment?: Attachment;
    valueCoding?: Coding;
    valueQuantity?: Quantity;
    valueReference?: Reference;
    constructor(source?: Partial<ContractTermOfferAnswer>);
}
//# sourceMappingURL=ContractTermOfferAnswer.d.ts.map
import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { Coding } from '../elements/Coding';
import { Quantity } from '../elements/Quantity';
import { QuestionnaireResponseItem } from './QuestionnaireResponseItem';
import { Reference } from '../elements/Reference';
export declare class QuestionnaireResponseItemAnswer extends BackboneElement {
    item?: QuestionnaireResponseItem[];
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
    constructor(source?: Partial<QuestionnaireResponseItemAnswer>);
}
//# sourceMappingURL=QuestionnaireResponseItemAnswer.d.ts.map
import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Coding } from '../elements/Coding';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class QuestionnaireItemEnableWhen extends BackboneElement {
    answerBoolean?: boolean;
    _answerBoolean?: Element;
    answerDecimal?: number;
    answerInteger?: number;
    answerDate?: string;
    _answerDate?: Element;
    answerDateTime?: string;
    _answerDateTime?: Element;
    answerTime?: string;
    _answerTime?: Element;
    answerString?: string;
    _answerString?: Element;
    answerCoding?: Coding;
    answerQuantity?: Quantity;
    answerReference?: Reference;
    operator: ('exists' | '=' | '!=' | '>' | '<' | '>=' | '<=');
    _operator?: Element;
    question?: string;
    _question?: Element;
    constructor(source?: Partial<QuestionnaireItemEnableWhen>);
}
//# sourceMappingURL=QuestionnaireItemEnableWhen.d.ts.map
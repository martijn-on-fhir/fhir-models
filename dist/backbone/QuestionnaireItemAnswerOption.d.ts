import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';
import { Reference } from '../elements/Reference';
export declare class QuestionnaireItemAnswerOption extends BackboneElement {
    initialSelected?: boolean;
    _initialSelected?: Element;
    valueInteger?: number;
    valueDate?: string;
    _valueDate?: Element;
    valueTime?: string;
    _valueTime?: Element;
    valueString?: string;
    _valueString?: Element;
    valueCoding?: Coding;
    valueReference?: Reference;
    constructor(source?: Partial<QuestionnaireItemAnswerOption>);
}
//# sourceMappingURL=QuestionnaireItemAnswerOption.d.ts.map
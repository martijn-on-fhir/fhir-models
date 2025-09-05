import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Coding } from '../elements/Coding';
import { QuestionnaireItemAnswerOption } from './QuestionnaireItemAnswerOption';
import { QuestionnaireItemEnableWhen } from './QuestionnaireItemEnableWhen';
import { QuestionnaireItemInitial } from './QuestionnaireItemInitial';
export declare class QuestionnaireItem extends BackboneElement {
    answerOption?: QuestionnaireItemAnswerOption[];
    answerValueSet?: string;
    _answerValueSet?: Element;
    code?: Coding[];
    definition?: string;
    _definition?: Element;
    enableBehavior?: ('all' | 'any');
    _enableBehavior?: Element;
    enableWhen?: QuestionnaireItemEnableWhen[];
    initial?: QuestionnaireItemInitial[];
    item?: QuestionnaireItem[];
    linkId?: string;
    _linkId?: Element;
    maxLength?: number;
    prefix?: string;
    _prefix?: Element;
    readOnly?: boolean;
    _readOnly?: Element;
    repeats?: boolean;
    _repeats?: Element;
    required?: boolean;
    _required?: Element;
    text?: string;
    _text?: Element;
    type?: ('group' | 'display' | 'question' | 'boolean' | 'decimal' | 'integer' | 'date' | 'dateTime' | 'time' | 'string' | 'text' | 'url' | 'choice' | 'open-choice' | 'attachment' | 'reference' | 'quantity');
    _type?: Element;
    constructor(source?: Partial<QuestionnaireItem>);
}
//# sourceMappingURL=QuestionnaireItem.d.ts.map
import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { QuestionnaireResponseItemAnswer } from './QuestionnaireResponseItemAnswer';
export declare class QuestionnaireResponseItem extends BackboneElement {
    answer?: QuestionnaireResponseItemAnswer[];
    definition?: string;
    _definition?: Element;
    item?: QuestionnaireResponseItem[];
    linkId?: string;
    _linkId?: Element;
    text?: string;
    _text?: Element;
    constructor(source?: Partial<QuestionnaireResponseItem>);
}
//# sourceMappingURL=QuestionnaireResponseItem.d.ts.map
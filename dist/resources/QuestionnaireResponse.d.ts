import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { QuestionnaireResponseItem } from '../backbone/QuestionnaireResponseItem';
import { Reference } from '../elements/Reference';
export declare class QuestionnaireResponse extends DomainResource {
    readonly resourceType: "QuestionnaireResponse";
    author?: Reference;
    authored?: string;
    _authored?: Element;
    basedOn?: Reference[];
    encounter?: Reference;
    identifier?: Identifier;
    item?: QuestionnaireResponseItem[];
    partOf?: Reference[];
    questionnaire?: string;
    _questionnaire?: Element;
    source?: Reference;
    status?: ('in-progress' | 'completed' | 'amended' | 'entered-in-error' | 'stopped');
    _status?: Element;
    subject?: Reference;
    constructor(source?: Partial<QuestionnaireResponse>);
}
//# sourceMappingURL=QuestionnaireResponse.d.ts.map
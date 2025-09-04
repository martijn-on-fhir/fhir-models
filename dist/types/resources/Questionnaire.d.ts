import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { QuestionnaireItem } from '../backbone/QuestionnaireItem';
export declare class Questionnaire extends DomainResource {
    readonly resourceType: "Questionnaire";
    approvalDate?: string;
    _approvalDate?: Element;
    code?: Coding[];
    contact?: ContactDetail[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    derivedFrom?: string[];
    _derivedFrom?: Element[];
    description?: string;
    _description?: Element;
    effectivePeriod?: Period;
    experimental?: boolean;
    _experimental?: Element;
    identifier?: Identifier[];
    item?: QuestionnaireItem[];
    jurisdiction?: CodeableConcept[];
    lastReviewDate?: string;
    _lastReviewDate?: Element;
    name?: string;
    _name?: Element;
    publisher?: string;
    _publisher?: Element;
    purpose?: string;
    constructor(source?: Partial<Questionnaire>);
}
//# sourceMappingURL=Questionnaire.d.ts.map
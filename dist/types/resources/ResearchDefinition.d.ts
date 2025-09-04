import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class ResearchDefinition extends DomainResource {
    readonly resourceType: "ResearchDefinition";
    approvalDate?: string;
    _approvalDate?: Element;
    author?: ContactDetail[];
    comment?: string[];
    _comment?: Element[];
    contact?: ContactDetail[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    editor?: ContactDetail[];
    effectivePeriod?: Period;
    endorser?: ContactDetail[];
    experimental?: boolean;
    _experimental?: Element;
    exposure?: Reference;
    exposureAlternative?: Reference;
    identifier?: Identifier[];
    jurisdiction?: CodeableConcept[];
    lastReviewDate?: string;
    _lastReviewDate?: Element;
    library?: string[];
    _library?: Element[];
    constructor(source?: Partial<ResearchDefinition>);
}
//# sourceMappingURL=ResearchDefinition.d.ts.map
import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class Evidence extends DomainResource {
    readonly resourceType: "Evidence";
    approvalDate?: string;
    _approvalDate?: Element;
    author?: ContactDetail[];
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
    exposureBackground?: Reference;
    exposureVariant?: Reference[];
    identifier?: Identifier[];
    jurisdiction?: CodeableConcept[];
    lastReviewDate?: string;
    _lastReviewDate?: Element;
    name?: string;
    _name?: Element;
    note?: Annotation[];
    outcome?: Reference[];
    publisher?: string;
    _publisher?: Element;
    constructor(source?: Partial<Evidence>);
}
//# sourceMappingURL=Evidence.d.ts.map
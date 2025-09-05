import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeSystemConcept } from '../backbone/CodeSystemConcept';
import { CodeSystemFilter } from '../backbone/CodeSystemFilter';
import { CodeSystemProperty } from '../backbone/CodeSystemProperty';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
export declare class CodeSystem extends DomainResource {
    readonly resourceType: "CodeSystem";
    caseSensitive?: boolean;
    _caseSensitive?: Element;
    compositional?: boolean;
    _compositional?: Element;
    concept?: CodeSystemConcept[];
    contact?: ContactDetail[];
    content?: ('not-present' | 'example' | 'fragment' | 'complete' | 'supplement');
    _content?: Element;
    copyright?: string;
    _copyright?: Element;
    count?: number;
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    experimental?: boolean;
    _experimental?: Element;
    filter?: CodeSystemFilter[];
    hierarchyMeaning?: ('grouped-by' | 'is-a' | 'part-of' | 'classified-with');
    _hierarchyMeaning?: Element;
    identifier?: Identifier[];
    jurisdiction?: CodeableConcept[];
    name?: string;
    _name?: Element;
    property?: CodeSystemProperty[];
    constructor(source?: Partial<CodeSystem>);
}
//# sourceMappingURL=CodeSystem.d.ts.map
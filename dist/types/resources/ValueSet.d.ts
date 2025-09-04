import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { ValueSetCompose } from '../backbone/ValueSetCompose';
import { ValueSetExpansion } from '../backbone/ValueSetExpansion';
export declare class ValueSet extends DomainResource {
    readonly resourceType: "ValueSet";
    compose?: ValueSetCompose;
    contact?: ContactDetail[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    expansion?: ValueSetExpansion;
    experimental?: boolean;
    _experimental?: Element;
    identifier?: Identifier[];
    immutable?: boolean;
    _immutable?: Element;
    jurisdiction?: CodeableConcept[];
    name?: string;
    _name?: Element;
    publisher?: string;
    _publisher?: Element;
    purpose?: string;
    _purpose?: Element;
    status?: ('draft' | 'active' | 'retired' | 'unknown');
    _status?: Element;
    title?: string;
    _title?: Element;
    constructor(source?: Partial<ValueSet>);
}
//# sourceMappingURL=ValueSet.d.ts.map
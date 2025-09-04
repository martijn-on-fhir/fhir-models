import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { SearchParameterComponent } from '../backbone/SearchParameterComponent';
export declare class SearchParameter extends DomainResource {
    readonly resourceType: "SearchParameter";
    base?: string[];
    _base?: Element[];
    chain?: string[];
    _chain?: Element[];
    code?: string;
    _code?: Element;
    comparator?: Array<'eq' | 'ne' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb' | 'ap'>;
    _comparator?: Element[];
    component?: SearchParameterComponent[];
    contact?: ContactDetail[];
    date?: string;
    _date?: Element;
    derivedFrom?: string;
    _derivedFrom?: Element;
    description?: string;
    _description?: Element;
    experimental?: boolean;
    _experimental?: Element;
    expression?: string;
    _expression?: Element;
    jurisdiction?: CodeableConcept[];
    modifier?: Array<'missing' | 'exact' | 'contains' | 'not' | 'text' | 'in' | 'not-in' | 'below' | 'above' | 'type' | 'identifier' | 'ofType'>;
    _modifier?: Element[];
    multipleAnd?: boolean;
    _multipleAnd?: Element;
    constructor(source?: Partial<SearchParameter>);
}
//# sourceMappingURL=SearchParameter.d.ts.map
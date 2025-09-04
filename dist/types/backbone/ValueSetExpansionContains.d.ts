import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ValueSetComposeIncludeConceptDesignation } from './ValueSetComposeIncludeConceptDesignation';
export declare class ValueSetExpansionContains extends BackboneElement {
    abstract?: boolean;
    _abstract?: Element;
    code?: string;
    _code?: Element;
    contains?: ValueSetExpansionContains[];
    designation?: ValueSetComposeIncludeConceptDesignation[];
    display?: string;
    _display?: Element;
    inactive?: boolean;
    _inactive?: Element;
    system?: string;
    _system?: Element;
    version?: string;
    _version?: Element;
    constructor(source?: Partial<ValueSetExpansionContains>);
}
//# sourceMappingURL=ValueSetExpansionContains.d.ts.map
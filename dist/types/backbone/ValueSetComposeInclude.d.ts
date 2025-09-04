import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ValueSetComposeIncludeConcept } from './ValueSetComposeIncludeConcept';
import { ValueSetComposeIncludeFilter } from './ValueSetComposeIncludeFilter';
export declare class ValueSetComposeInclude extends BackboneElement {
    concept?: ValueSetComposeIncludeConcept[];
    filter?: ValueSetComposeIncludeFilter[];
    system?: string;
    _system?: Element;
    valueSet?: string[];
    _valueSet?: Element[];
    version?: string;
    _version?: Element;
    constructor(source?: Partial<ValueSetComposeInclude>);
}
//# sourceMappingURL=ValueSetComposeInclude.d.ts.map
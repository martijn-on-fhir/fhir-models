import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
export declare class ValueSetComposeIncludeFilter extends BackboneElement {
    op: ('=' | 'is-a' | 'descendent-of' | 'is-not-a' | 'regex' | 'in' | 'not-in' | 'generalizes' | 'exists');
    _op?: Element;
    property?: string;
    _property?: Element;
    value?: string;
    _value?: Element;
    constructor(source?: Partial<ValueSetComposeIncludeFilter>);
}
//# sourceMappingURL=ValueSetComposeIncludeFilter.d.ts.map
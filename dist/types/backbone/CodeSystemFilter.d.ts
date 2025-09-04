import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
export declare class CodeSystemFilter extends BackboneElement {
    code?: string;
    _code?: Element;
    description?: string;
    _description?: Element;
    operator: Array<'=' | 'is-a' | 'descendent-of' | 'is-not-a' | 'regex' | 'in' | 'not-in' | 'generalizes' | 'exists'>;
    _operator?: Element[];
    value?: string;
    _value?: Element;
    constructor(source?: Partial<CodeSystemFilter>);
}
//# sourceMappingURL=CodeSystemFilter.d.ts.map
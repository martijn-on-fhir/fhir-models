import 'reflect-metadata';
import { Element } from '../base/Element';
export declare class ElementDefinitionConstraint extends Element {
    expression?: string;
    _expression?: Element;
    human: string;
    _human?: Element;
    key: string;
    _key?: Element;
    requirements?: string;
    _requirements?: Element;
    severity: 'error' | 'warning';
    _severity?: Element;
    source?: string;
    _source?: Element;
    xpath?: string;
    _xpath?: Element;
    constructor(source?: Partial<ElementDefinitionConstraint>);
}
//# sourceMappingURL=ElementDefinitionConstraint.d.ts.map
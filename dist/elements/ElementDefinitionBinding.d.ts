import 'reflect-metadata';
import { Element } from '../base/Element';
export declare class ElementDefinitionBinding extends Element {
    description?: string;
    _description?: Element;
    strength: 'required' | 'extensible' | 'preferred' | 'example';
    _strength?: Element;
    valueSet?: string;
    _valueSet?: Element;
    constructor(source?: Partial<ElementDefinitionBinding>);
}
//# sourceMappingURL=ElementDefinitionBinding.d.ts.map
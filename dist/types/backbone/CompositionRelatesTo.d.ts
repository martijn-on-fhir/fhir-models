import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class CompositionRelatesTo extends BackboneElement {
    code?: ('replaces' | 'transforms' | 'signs' | 'appends');
    _code?: Element;
    targetIdentifier?: Identifier;
    targetReference?: Reference;
    constructor(source?: Partial<CompositionRelatesTo>);
}
//# sourceMappingURL=CompositionRelatesTo.d.ts.map
import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
export declare class DocumentReferenceRelatesTo extends BackboneElement {
    code?: ('replaces' | 'transforms' | 'signs' | 'appends');
    _code?: Element;
    target?: Reference;
    constructor(source?: Partial<DocumentReferenceRelatesTo>);
}
//# sourceMappingURL=DocumentReferenceRelatesTo.d.ts.map
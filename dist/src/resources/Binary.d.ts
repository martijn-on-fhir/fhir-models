import 'reflect-metadata';
import { Resource } from '../base/Resource';
import { Element } from '../base/Element';
import { Reference } from '../elements/Reference';
export declare class Binary extends Resource {
    readonly resourceType: "Binary";
    contentType?: string;
    _contentType?: Element;
    data?: string;
    _data?: Element;
    securityContext?: Reference;
    constructor(source?: Partial<Binary>);
}
//# sourceMappingURL=Binary.d.ts.map
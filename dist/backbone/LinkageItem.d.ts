import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Reference } from '../elements/Reference';
export declare class LinkageItem extends BackboneElement {
    resource?: Reference;
    type?: ('source' | 'alternate' | 'historical');
    _type?: Element;
    constructor(source?: Partial<LinkageItem>);
}
//# sourceMappingURL=LinkageItem.d.ts.map
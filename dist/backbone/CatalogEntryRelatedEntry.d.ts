import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
export declare class CatalogEntryRelatedEntry extends BackboneElement {
    item?: Reference;
    relationtype?: ('triggers' | 'is-replaced-by');
    _relationtype?: Element;
    constructor(source?: Partial<CatalogEntryRelatedEntry>);
}
//# sourceMappingURL=CatalogEntryRelatedEntry.d.ts.map
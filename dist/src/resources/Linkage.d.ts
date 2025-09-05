import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { LinkageItem } from '../backbone/LinkageItem';
import { Reference } from '../elements/Reference';
export declare class Linkage extends DomainResource {
    readonly resourceType: "Linkage";
    active?: boolean;
    _active?: Element;
    author?: Reference;
    item?: LinkageItem[];
    constructor(source?: Partial<Linkage>);
}
//# sourceMappingURL=Linkage.d.ts.map
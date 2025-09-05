import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
export declare class StructureMapStructure extends BackboneElement {
    alias?: string;
    _alias?: Element;
    documentation?: string;
    _documentation?: Element;
    mode?: ('source' | 'queried' | 'target' | 'produced');
    _mode?: Element;
    url?: string;
    _url?: Element;
    constructor(source?: Partial<StructureMapStructure>);
}
//# sourceMappingURL=StructureMapStructure.d.ts.map
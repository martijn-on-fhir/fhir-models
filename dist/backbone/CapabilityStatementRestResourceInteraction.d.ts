import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
export declare class CapabilityStatementRestResourceInteraction extends BackboneElement {
    code?: ('read' | 'vread' | 'update' | 'patch' | 'delete' | 'history-instance' | 'history-type' | 'create' | 'search-type');
    _code?: Element;
    documentation?: string;
    _documentation?: Element;
    constructor(source?: Partial<CapabilityStatementRestResourceInteraction>);
}
//# sourceMappingURL=CapabilityStatementRestResourceInteraction.d.ts.map
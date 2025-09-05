import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
export declare class CapabilityStatementDocument extends BackboneElement {
    documentation?: string;
    _documentation?: Element;
    mode?: ('producer' | 'consumer');
    _mode?: Element;
    profile?: string;
    _profile?: Element;
    constructor(source?: Partial<CapabilityStatementDocument>);
}
//# sourceMappingURL=CapabilityStatementDocument.d.ts.map
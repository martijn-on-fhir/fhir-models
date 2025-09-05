import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ValueSetExpansionContains } from './ValueSetExpansionContains';
import { ValueSetExpansionParameter } from './ValueSetExpansionParameter';
export declare class ValueSetExpansion extends BackboneElement {
    contains?: ValueSetExpansionContains[];
    identifier?: string;
    _identifier?: Element;
    offset?: number;
    parameter?: ValueSetExpansionParameter[];
    timestamp?: string;
    _timestamp?: Element;
    total?: number;
    constructor(source?: Partial<ValueSetExpansion>);
}
//# sourceMappingURL=ValueSetExpansion.d.ts.map
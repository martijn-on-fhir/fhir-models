import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { StructureMapGroupRuleDependent } from './StructureMapGroupRuleDependent';
import { StructureMapGroupRuleSource } from './StructureMapGroupRuleSource';
import { StructureMapGroupRuleTarget } from './StructureMapGroupRuleTarget';
export declare class StructureMapGroupRule extends BackboneElement {
    dependent?: StructureMapGroupRuleDependent[];
    documentation?: string;
    _documentation?: Element;
    name?: string;
    _name?: Element;
    rule?: StructureMapGroupRule[];
    source?: StructureMapGroupRuleSource[];
    target?: StructureMapGroupRuleTarget[];
    constructor(source?: Partial<StructureMapGroupRule>);
}
//# sourceMappingURL=StructureMapGroupRule.d.ts.map
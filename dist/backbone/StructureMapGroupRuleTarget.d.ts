import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { StructureMapGroupRuleTargetParameter } from './StructureMapGroupRuleTargetParameter';
export declare class StructureMapGroupRuleTarget extends BackboneElement {
    context?: string;
    _context?: Element;
    contextType?: ('type' | 'variable');
    _contextType?: Element;
    element?: string;
    _element?: Element;
    listMode?: Array<'first' | 'share' | 'last' | 'collate'>;
    _listMode?: Element[];
    listRuleId?: string;
    _listRuleId?: Element;
    parameter?: StructureMapGroupRuleTargetParameter[];
    transform?: ('create' | 'copy' | 'truncate' | 'escape' | 'cast' | 'append' | 'translate' | 'reference' | 'dateOp' | 'uuid' | 'pointer' | 'evaluate' | 'cc' | 'c' | 'qty' | 'id' | 'cp');
    _transform?: Element;
    variable?: string;
    _variable?: Element;
    constructor(source?: Partial<StructureMapGroupRuleTarget>);
}
//# sourceMappingURL=StructureMapGroupRuleTarget.d.ts.map
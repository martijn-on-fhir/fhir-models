import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { StructureMapGroupInput } from './StructureMapGroupInput';
import { StructureMapGroupRule } from './StructureMapGroupRule';
export declare class StructureMapGroup extends BackboneElement {
    documentation?: string;
    _documentation?: Element;
    extends?: string;
    _extends?: Element;
    input?: StructureMapGroupInput[];
    name?: string;
    _name?: Element;
    rule?: StructureMapGroupRule[];
    typeMode?: ('none' | 'types' | 'type-and-types');
    _typeMode?: Element;
    constructor(source?: Partial<StructureMapGroup>);
}
//# sourceMappingURL=StructureMapGroup.d.ts.map
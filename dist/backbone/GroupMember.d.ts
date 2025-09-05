import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class GroupMember extends BackboneElement {
    entity?: Reference;
    inactive?: boolean;
    _inactive?: Element;
    period?: Period;
    constructor(source?: Partial<GroupMember>);
}
//# sourceMappingURL=GroupMember.d.ts.map
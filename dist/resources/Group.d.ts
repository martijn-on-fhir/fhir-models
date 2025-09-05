import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { GroupCharacteristic } from '../backbone/GroupCharacteristic';
import { GroupMember } from '../backbone/GroupMember';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class Group extends DomainResource {
    readonly resourceType: "Group";
    active?: boolean;
    _active?: Element;
    actual?: boolean;
    _actual?: Element;
    characteristic?: GroupCharacteristic[];
    code?: CodeableConcept;
    identifier?: Identifier[];
    managingEntity?: Reference;
    member?: GroupMember[];
    name?: string;
    _name?: Element;
    quantity?: number;
    type?: ('person' | 'animal' | 'practitioner' | 'device' | 'medication' | 'substance');
    _type?: Element;
    constructor(source?: Partial<Group>);
}
//# sourceMappingURL=Group.d.ts.map
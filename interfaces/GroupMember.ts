import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Identifies the resource instances that are members of the group.
 */
export interface GroupMember extends BackboneElement {

  /**
   * A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.
   */
  entity: Reference;
  /**
   * A flag to indicate that the member is no longer in the group, but previously may have been a member.
   */
  inactive?: boolean | undefined;
  _inactive?: Element | undefined;
  /**
   * The period that the member was in the group, if known.
   */
  period?: Period | undefined;

}
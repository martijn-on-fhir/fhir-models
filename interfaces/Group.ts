import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { GroupCharacteristic } from './GroupCharacteristic';
import { GroupMember } from './GroupMember';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export interface Group extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Group';
  /**
   * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
   */
  active?: boolean | undefined;
  _active?: Element | undefined;
  /**
   * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
   */
  actual: boolean;
  _actual?: Element | undefined;
  /**
   * All the identified characteristics must be true for an entity to a member of the group.
   */
  characteristic?: GroupCharacteristic[] | undefined;
  /**
   * This would generally be omitted for Person resources.
   */
  code?: CodeableConcept | undefined;
  /**
   * A unique business identifier for this group.
   */
  identifier?: Identifier[] | undefined;
  /**
   * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
   */
  managingEntity?: Reference | undefined;
  /**
   * Identifies the resource instances that are members of the group.
   */
  member?: GroupMember[] | undefined;
  /**
   * A label assigned to the group for human identification and communication.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Note that the quantity may be less than the number of members if some of the members are not active.
   */
  quantity?: number | undefined;
  /**
   * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
   */
  type: ('person'|'animal'|'practitioner'|'device'|'medication'|'substance');
  _type?: Element | undefined;

}
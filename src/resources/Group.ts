import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { GroupCharacteristic } from '../backbone/GroupCharacteristic';
import { GroupMember } from '../backbone/GroupMember';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Group extends DomainResource implements fhir.Group {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Group' as const;

  /**
   * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
   */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _active?: Element;

  /**
   * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set 
   */
  @IsOptional()
  @IsBoolean()
  actual?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _actual?: Element;

  /**
   * All the identified characteristics must be true for an entity to a member of the group.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GroupCharacteristic)
  characteristic?: GroupCharacteristic[];

  /**
   * This would generally be omitted for Person resources.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * A unique business identifier for this group.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  managingEntity?: Reference;

  /**
   * Identifies the resource instances that are members of the group.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GroupMember)
  member?: GroupMember[];

  /**
   * A label assigned to the group for human identification and communication.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Note that the quantity may be less than the number of members if some of the members are not active.
   */
  @IsOptional()
  @IsNumber()
  quantity?: number;

  /**
   * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medicati
   */
  @IsOptional()
  @IsIn(['person', 'animal', 'practitioner', 'device', 'medication', 'substance'])
  type?: ('person'|'animal'|'practitioner'|'device'|'medication'|'substance');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for Group
   */
  constructor(source: Partial<Group> = {}) {
    super(source);
    this.resourceType = 'Group';
  }
}

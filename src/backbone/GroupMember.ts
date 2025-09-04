import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class GroupMember extends BackboneElement implements fhir.GroupMember {
  /**
   * A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another gr
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  entity?: Reference;

  /**
   * A flag to indicate that the member is no longer in the group, but previously may have been a member.
   */
  @IsOptional()
  @IsBoolean()
  inactive?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _inactive?: Element;

  /**
   * The period that the member was in the group, if known.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Constructor for GroupMember
   */
  constructor(source: Partial<GroupMember> = {}) {
    super(source);
  }
}

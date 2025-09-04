import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PersonLink extends BackboneElement {
  /**
   * Level of assurance that this link is associated with the target resource.
   */
  @IsOptional()
  @IsIn(['level1', 'level2', 'level3', 'level4'])
  assurance?: ('level1'|'level2'|'level3'|'level4');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _assurance?: Element;

  /**
   * The resource to which this actual person is associated.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  target?: Reference;

  /**
   * Constructor for PersonLink
   */
  constructor(source: Partial<PersonLink> = {}) {
    super(source);
  }
}

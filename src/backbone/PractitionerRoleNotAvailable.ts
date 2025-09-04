import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PractitionerRoleNotAvailable extends BackboneElement {
  /**
   * The reason that can be presented to the user as to why this time is not available.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Service is not available (seasonally or for a public holiday) from this date.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  during?: Period;

  /**
   * Constructor for PractitionerRoleNotAvailable
   */
  constructor(source: Partial<PractitionerRoleNotAvailable> = {}) {
    super(source);
  }
}

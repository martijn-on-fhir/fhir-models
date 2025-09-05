import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimCareTeam extends BackboneElement {
  /**
   * Member of the team who provided the product or service.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /**
   * The qualification of the practitioner which is applicable for this service.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  qualification?: CodeableConcept;

  /**
   * Responsible might not be required when there is only a single provider listed.
   */
  @IsOptional()
  @IsBoolean()
  responsible?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _responsible?: Element;

  /**
   * Role might not be required when there is only a single provider listed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /**
   * A number to uniquely identify care team entries.
   */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /**
   * Constructor for ClaimCareTeam
   */
  constructor(source: Partial<ClaimCareTeam> = {}) {
    super(source);
  }
}

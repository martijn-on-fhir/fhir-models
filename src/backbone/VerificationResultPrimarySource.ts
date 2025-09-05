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
export class VerificationResultPrimarySource extends BackboneElement {
  /**
   * Ability of the primary source to push updates/alerts (yes; no; undetermined).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  canPushUpdates?: CodeableConcept;

  /**
   * Method for communicating with the primary source (manual; API; Push).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  communicationMethod?: CodeableConcept[];

  /**
   * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  pushTypeAvailable?: CodeableConcept[];

  /**
   * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Regi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /**
   * When the target was validated against the primary source.
   */
  @IsOptional()
  @IsString()
  validationDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _validationDate?: Element;

  /**
   * Status of the validation of the target against the primary source (successful; failed; unknown).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  validationStatus?: CodeableConcept;

  /**
   * Reference to the primary source.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  who?: Reference;

  /**
   * Constructor for VerificationResultPrimarySource
   */
  constructor(source: Partial<VerificationResultPrimarySource> = {}) {
    super(source);
  }
}

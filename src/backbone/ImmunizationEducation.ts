import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImmunizationEducation extends BackboneElement {
  /**
   * Identifier of the material presented to the patient.
   */
  @IsOptional()
  @IsString()
  documentType?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentType?: Element;

  /**
   * Date the educational material was given to the patient.
   */
  @IsOptional()
  @IsString()
  presentationDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _presentationDate?: Element;

  /**
   * Date the educational material was published.
   */
  @IsOptional()
  @IsString()
  publicationDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publicationDate?: Element;

  /**
   * Reference pointer to the educational material given to the patient if the information was on line.
   */
  @IsOptional()
  @IsString()
  reference?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _reference?: Element;

  /**
   * Constructor for ImmunizationEducation
   */
  constructor(source: Partial<ImmunizationEducation> = {}) {
    super(source);
  }
}

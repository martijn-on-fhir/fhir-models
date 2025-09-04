import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimSupportingInfo extends BackboneElement implements fhir.ClaimSupportingInfo {
  /**
   * This may contain a category for the local bill type codes.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment o
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * For example: the reason for the additional stay, or why a tooth is  missing.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reason?: CodeableConcept;

  /**
   * A number to uniquely identify supporting information entries.
   */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /**
   * The date when or period to which this information refers.
   */
  @IsOptional()
  @IsString()
  timingDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _timingDate?: Element;

  /**
   * The date when or period to which this information refers.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timingPeriod?: Period;

  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of th
   */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBoolean?: Element;

  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of th
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  valueAttachment?: Attachment;

  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /**
   * Constructor for ClaimSupportingInfo
   */
  constructor(source: Partial<ClaimSupportingInfo> = {}) {
    super(source);
  }
}

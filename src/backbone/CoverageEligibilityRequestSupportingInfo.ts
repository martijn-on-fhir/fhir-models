import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CoverageEligibilityRequestSupportingInfo extends BackboneElement implements fhir.CoverageEligibilityRequestSupportingInfo {
  /**
   * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
   */
  @IsOptional()
  @IsBoolean()
  appliesToAll?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _appliesToAll?: Element;

  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  information?: Reference;

  /**
   * A number to uniquely identify supporting information entries.
   */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /**
   * Constructor for CoverageEligibilityRequestSupportingInfo
   */
  constructor(source: Partial<CoverageEligibilityRequestSupportingInfo> = {}) {
    super(source);
  }
}

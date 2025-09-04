import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClinicalImpressionInvestigation extends BackboneElement implements fhir.ClinicalImpressionInvestigation {
  /**
   * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinic
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Most investigations are observations of one kind or another but some other specific types of data collection resources c
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  item?: Reference[];

  /**
   * Constructor for ClinicalImpressionInvestigation
   */
  constructor(source: Partial<ClinicalImpressionInvestigation> = {}) {
    super(source);
  }
}

import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Expression } from '../elements/Expression';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MeasureSupplementalData extends BackboneElement {
  /**
   * Indicates a meaning for the supplemental data. This can be as simple as a unique identifier, or it can establish meaning
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The criteria for the supplemental data. This is typically the name of a valid expression defined within a referenced lib
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  criteria?: Expression;

  /**
   * The human readable description of this supplemental data.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * An indicator of the intended usage for the supplemental data element. Supplemental data indicates the data is additional
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  usage?: CodeableConcept[];

  /**
   * Constructor for MeasureSupplementalData
   */
  constructor(source: Partial<MeasureSupplementalData> = {}) {
    super(source);
  }
}

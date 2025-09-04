import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimDiagnosis extends BackboneElement {
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  diagnosisCodeableConcept?: CodeableConcept;

  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  diagnosisReference?: Reference;

  /**
   * Indication of whether the diagnosis was present on admission to a facility.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  onAdmission?: CodeableConcept;

  /**
   * For example DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardial Infa
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  packageCode?: CodeableConcept;

  /**
   * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
   */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /**
   * For example: admitting, primary, secondary, discharge.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /**
   * Constructor for ClaimDiagnosis
   */
  constructor(source: Partial<ClaimDiagnosis> = {}) {
    super(source);
  }
}

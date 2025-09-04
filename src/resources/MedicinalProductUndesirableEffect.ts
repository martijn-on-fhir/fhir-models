import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Population } from '../backbone/Population';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductUndesirableEffect extends DomainResource implements fhir.MedicinalProductUndesirableEffect {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicinalProductUndesirableEffect' as const;

  /**
   * Classification of the effect.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  classification?: CodeableConcept;

  /**
   * The frequency of occurrence of the effect.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  frequencyOfOccurrence?: CodeableConcept;

  /**
   * The population group to which this applies.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Population)
  population?: Population[];

  /**
   * The medication for which this is an indication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subject?: Reference[];

  /**
   * The symptom, condition or undesirable effect.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  symptomConditionEffect?: CodeableConcept;

  /**
   * Constructor for MedicinalProductUndesirableEffect
   */
  constructor(source: Partial<MedicinalProductUndesirableEffect> = {}) {
    super(source);
    this.resourceType = 'MedicinalProductUndesirableEffect';
  }
}

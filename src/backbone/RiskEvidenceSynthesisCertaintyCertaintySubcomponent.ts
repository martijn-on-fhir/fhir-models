import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends BackboneElement implements fhir.RiskEvidenceSynthesisCertaintyCertaintySubcomponent {
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * A rating of a subcomponent of rating certainty.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  rating?: CodeableConcept[];

  /**
   * Type of subcomponent of certainty rating.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for RiskEvidenceSynthesisCertaintyCertaintySubcomponent
   */
  constructor(source: Partial<RiskEvidenceSynthesisCertaintyCertaintySubcomponent> = {}) {
    super(source);
  }
}

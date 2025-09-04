import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { EffectEvidenceSynthesisCertaintyCertaintySubcomponent } from './EffectEvidenceSynthesisCertaintyCertaintySubcomponent';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EffectEvidenceSynthesisCertainty extends BackboneElement implements fhir.EffectEvidenceSynthesisCertainty {
  /**
   * A description of a component of the overall certainty.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EffectEvidenceSynthesisCertaintyCertaintySubcomponent)
  certaintySubcomponent?: EffectEvidenceSynthesisCertaintyCertaintySubcomponent[];

  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * A rating of the certainty of the effect estimate.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  rating?: CodeableConcept[];

  /**
   * Constructor for EffectEvidenceSynthesisCertainty
   */
  constructor(source: Partial<EffectEvidenceSynthesisCertainty> = {}) {
    super(source);
  }
}

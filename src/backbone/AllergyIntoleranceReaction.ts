import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AllergyIntoleranceReaction extends BackboneElement {
  /**
   * Use the description to provide any details of a particular event of the occurred reaction such as circumstances, reactio
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Coding of the route of exposure with a terminology should be used wherever possible.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  exposureRoute?: CodeableConcept;

  /**
   * Manifestation can be expressed as a single word, phrase or brief description. For example: nausea, rash or no reaction. 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  manifestation?: CodeableConcept[];

  /**
   * Use this field to record information indirectly related to a particular event and not captured in the description. For e
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Record of the date and/or time of the onset of the Reaction.
   */
  @IsOptional()
  @IsString()
  onset?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _onset?: Element;

  /**
   * It is acknowledged that this assessment is very subjective. There may be some specific practice domains where objective 
   */
  @IsOptional()
  @IsIn(['mild', 'moderate', 'severe'])
  severity?: ('mild'|'moderate'|'severe');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _severity?: Element;

  /**
   * Coding of the specific substance (or pharmaceutical product) with a terminology capable of triggering decision support s
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  substance?: CodeableConcept;

  /**
   * Constructor for AllergyIntoleranceReaction
   */
  constructor(source: Partial<AllergyIntoleranceReaction> = {}) {
    super(source);
  }
}

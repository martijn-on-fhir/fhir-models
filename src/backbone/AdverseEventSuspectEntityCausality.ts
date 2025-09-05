import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AdverseEventSuspectEntityCausality extends BackboneElement {
  /**
   * Assessment of if the entity caused the event.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  assessment?: CodeableConcept;

  /**
   * AdverseEvent.suspectEntity.causalityAuthor.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /**
   * ProbabilityScale | Bayesian | Checklist.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /**
   * AdverseEvent.suspectEntity.causalityProductRelatedness.
   */
  @IsOptional()
  @IsString()
  productRelatedness?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _productRelatedness?: Element;

  /**
   * Constructor for AdverseEventSuspectEntityCausality
   */
  constructor(source: Partial<AdverseEventSuspectEntityCausality> = {}) {
    super(source);
  }
}

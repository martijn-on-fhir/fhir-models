import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DataRequirement } from '../elements/DataRequirement';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class GuidanceResponse extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'GuidanceResponse' as const;

  /**
   * If the evaluation could not be completed due to lack of information, or additional information would potentially result 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirement)
  dataRequirement?: DataRequirement[];

  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may p
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  evaluationMessage?: Reference[];

  /**
   * Allows a service to provide  unique, business identifiers for the response.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  @IsOptional()
  @IsString()
  moduleUri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _moduleUri?: Element;

  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  @IsOptional()
  @IsString()
  moduleCanonical?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _moduleCanonical?: Element;

  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  moduleCodeableConcept?: CodeableConcept;

  /**
   * Provides a mechanism to communicate additional information about the response.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Indicates when the guidance response was processed.
   */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _occurrenceDateTime?: Element;

  /**
   * The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as pr
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  outputParameters?: Reference;

  /**
   * Provides a reference to the device that performed the guidance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /**
   * Describes the reason for the guidance response in coded or textual form.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed b
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * The identifier of the request associated with this response. If an identifier was given as part of the request, it will 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  requestIdentifier?: Identifier;

  /**
   * The actions, if any, produced by the evaluation of the artifact.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  result?: Reference;

  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  @IsOptional()
  @IsIn(['success', 'data-requested', 'data-required', 'in-progress', 'failure', 'entered-in-error'])
  status?: ('success'|'data-requested'|'data-required'|'in-progress'|'failure'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The patient for which the request was processed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Constructor for GuidanceResponse
   */
  constructor(source: Partial<GuidanceResponse> = {}) {
    super(source);
    this.resourceType = 'GuidanceResponse';
  }
}

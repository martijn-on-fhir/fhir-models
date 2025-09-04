import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Age } from '../elements/Age';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ConditionEvidence } from '../backbone/ConditionEvidence';
import { ConditionStage } from '../backbone/ConditionStage';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Range } from '../elements/Range';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Condition extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Condition' as const;

  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Ag
   */
  @IsOptional()
  @IsString()
  abatementDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _abatementDateTime?: Element;

  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Ag
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  abatementAge?: Age;

  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Ag
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  abatementPeriod?: Period;

  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Ag
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  abatementRange?: Range;

  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Ag
   */
  @IsOptional()
  @IsString()
  abatementString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _abatementString?: Element;

  /**
   * Individual who is making the condition statement.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  asserter?: Reference;

  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resourc
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept[];

  /**
   * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  clinicalStatus?: CodeableConcept;

  /**
   * Identification of the condition, problem or diagnosis.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments,
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConditionEvidence)
  evidence?: ConditionEvidence[];

  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best prac
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, it
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  @IsOptional()
  @IsString()
  onsetDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _onsetDateTime?: Element;

  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  onsetAge?: Age;

  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  onsetPeriod?: Period;

  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  onsetRange?: Range;

  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  @IsOptional()
  @IsString()
  onsetString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _onsetString?: Element;

  /**
   * The recordedDate represents when this particular Condition record was created in the system, which is often a system-gen
   */
  @IsOptional()
  @IsString()
  recordedDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _recordedDate?: Element;

  /**
   * Constructor for Condition
   */
  constructor(source: Partial<Condition> = {}) {
    super(source);
    this.resourceType = 'Condition';
  }
}

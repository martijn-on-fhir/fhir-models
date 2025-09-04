import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Age } from '../elements/Age';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Range } from '../elements/Range';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class FamilyMemberHistoryCondition extends BackboneElement implements fhir.FamilyMemberHistoryCondition {
  /**
   * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer'
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it 
   */
  @IsOptional()
  @IsBoolean()
  contributedToDeath?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _contributedToDeath?: Element;

  /**
   * An area where general notes can be placed about this specific condition.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple o
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  onsetAge?: Age;

  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple o
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  onsetRange?: Range;

  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple o
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  onsetPeriod?: Period;

  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple o
   */
  @IsOptional()
  @IsString()
  onsetString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _onsetString?: Element;

  /**
   * Indicates what happened following the condition.  If the condition resulted in death, deceased date is captured on the r
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  outcome?: CodeableConcept;

  /**
   * Constructor for FamilyMemberHistoryCondition
   */
  constructor(source: Partial<FamilyMemberHistoryCondition> = {}) {
    super(source);
  }
}

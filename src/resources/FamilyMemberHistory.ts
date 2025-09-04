import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Age } from '../elements/Age';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { FamilyMemberHistoryCondition } from '../backbone/FamilyMemberHistoryCondition';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Range } from '../elements/Range';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class FamilyMemberHistory extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'FamilyMemberHistory' as const;

  /**
   * use estimatedAge to indicate whether the age is actual or not.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  ageAge?: Age;

  /**
   * use estimatedAge to indicate whether the age is actual or not.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  ageRange?: Range;

  /**
   * use estimatedAge to indicate whether the age is actual or not.
   */
  @IsOptional()
  @IsString()
  ageString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _ageString?: Element;

  /**
   * The actual or approximate date of birth of the relative.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  bornPeriod?: Period;

  /**
   * The actual or approximate date of birth of the relative.
   */
  @IsOptional()
  @IsString()
  bornDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _bornDate?: Element;

  /**
   * The actual or approximate date of birth of the relative.
   */
  @IsOptional()
  @IsString()
  bornString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _bornString?: Element;

  /**
   * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to r
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FamilyMemberHistoryCondition)
  condition?: FamilyMemberHistoryCondition[];

  /**
   * Describes why the family member's history is not available.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  dataAbsentReason?: CodeableConcept;

  /**
   * This should be captured even if the same as the date on the List aggregating the full family history.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record
   */
  @IsOptional()
  @IsBoolean()
  deceasedBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _deceasedBoolean?: Element;

  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  deceasedAge?: Age;

  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  deceasedRange?: Range;

  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record
   */
  @IsOptional()
  @IsString()
  deceasedDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _deceasedDate?: Element;

  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record
   */
  @IsOptional()
  @IsString()
  deceasedString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _deceasedString?: Element;

  /**
   * This element is labeled as a modifier because the fact that age is estimated can/should change the results of any algori
   */
  @IsOptional()
  @IsBoolean()
  estimatedAge?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _estimatedAge?: Element;

  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best prac
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in p
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  /**
   * Constructor for FamilyMemberHistory
   */
  constructor(source: Partial<FamilyMemberHistory> = {}) {
    super(source);
    this.resourceType = 'FamilyMemberHistory';
  }
}

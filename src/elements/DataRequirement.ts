import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { CodeableConcept } from './CodeableConcept';
import { DataRequirementCodeFilter } from './DataRequirementCodeFilter';
import { DataRequirementDateFilter } from './DataRequirementDateFilter';
import { DataRequirementSort } from './DataRequirementSort';
import { Reference } from './Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiti
 */
export class DataRequirement extends Element implements fhir.DataRequirement {
  /**
   * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter d
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirementCodeFilter)
  codeFilter?: DataRequirementCodeFilter[];

  /**
   * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an add
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirementDateFilter)
  dateFilter?: DataRequirementDateFilter[];

  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
   */
  @IsOptional()
  @IsNumber()
  limit?: number;

  /**
   * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effect
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  mustSupport?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _mustSupport?: Element[];

  /**
   * The profile of the required data, specified as the uri of the profile definition.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  profile?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _profile?: Element[];

  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirementSort)
  sort?: DataRequirementSort[];

  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughl
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subjectCodeableConcept?: CodeableConcept;

  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughl
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subjectReference?: Reference;

  /**
   * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profi
   */
  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for DataRequirement
   */
  constructor(source: Partial<DataRequirement> = {}) {
    super(source);
  }
}

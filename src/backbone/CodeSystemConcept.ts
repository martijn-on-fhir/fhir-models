import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeSystemConceptDesignation } from './CodeSystemConceptDesignation';
import { CodeSystemConceptProperty } from './CodeSystemConceptProperty';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CodeSystemConcept extends BackboneElement {
  /**
   * A code - a text symbol - that uniquely identifies the concept within the code system.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/cont
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeSystemConcept)
  concept?: CodeSystemConcept[];

  /**
   * The formal definition of the concept. The code system resource does not make formal definitions required, because of the
   */
  @IsOptional()
  @IsString()
  definition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _definition?: Element;

  /**
   * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeSystemConceptDesignation)
  designation?: CodeSystemConceptDesignation[];

  /**
   * A human readable string that is the recommended default way to present this concept to a user.
   */
  @IsOptional()
  @IsString()
  display?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _display?: Element;

  /**
   * A property value for this concept.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeSystemConceptProperty)
  property?: CodeSystemConceptProperty[];

  /**
   * Constructor for CodeSystemConcept
   */
  constructor(source: Partial<CodeSystemConcept> = {}) {
    super(source);
  }
}

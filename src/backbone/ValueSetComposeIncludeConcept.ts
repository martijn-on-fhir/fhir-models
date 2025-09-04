import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ValueSetComposeIncludeConceptDesignation } from './ValueSetComposeIncludeConceptDesignation';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ValueSetComposeIncludeConcept extends BackboneElement {
  /**
   * Expressions are allowed if defined by the underlying code system.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetComposeIncludeConceptDesignation)
  designation?: ValueSetComposeIncludeConceptDesignation[];

  /**
   * The value set resource allows for an alternative display to be specified for when this concept is used in this particula
   */
  @IsOptional()
  @IsString()
  display?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _display?: Element;

  /**
   * Constructor for ValueSetComposeIncludeConcept
   */
  constructor(source: Partial<ValueSetComposeIncludeConcept> = {}) {
    super(source);
  }
}

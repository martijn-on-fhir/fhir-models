import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { ValueSetComposeIncludeConcept } from './ValueSetComposeIncludeConcept';
import { ValueSetComposeIncludeFilter } from './ValueSetComposeIncludeFilter';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ValueSetComposeInclude extends BackboneElement {
  /**
   * The list of concepts is considered ordered, though the order might not have any particular significance. Typically, the 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetComposeIncludeConcept)
  concept?: ValueSetComposeIncludeConcept[];

  /**
   * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appr
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetComposeIncludeFilter)
  filter?: ValueSetComposeIncludeFilter[];

  /**
   * If there are no codes or filters, the entire code system is included. Note that the set of codes that are included may c
   */
  @IsOptional()
  @IsString()
  system?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _system?: Element;

  /**
   * The value set URI is either a logical reference to a defined value set such as a [SNOMED CT reference set](snomedct.html
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  valueSet?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _valueSet?: Element[];

  /**
   * This is used when selecting the descendants of a concept - they may change between versions. If no version is specified,
   */
  @IsOptional()
  @IsString()
  version?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _version?: Element;

  /**
   * Constructor for ValueSetComposeInclude
   */
  constructor(source: Partial<ValueSetComposeInclude> = {}) {
    super(source);
  }
}

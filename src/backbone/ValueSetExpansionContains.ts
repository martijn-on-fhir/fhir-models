import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { ValueSetComposeIncludeConceptDesignation } from './ValueSetComposeIncludeConceptDesignation';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ValueSetExpansionContains extends BackboneElement {
  /**
   * This should not be understood to exclude its use for searching (e.g. by subsumption testing). The client should know whe
   */
  @IsOptional()
  @IsBoolean()
  abstract?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _abstract?: Element;

  /**
   * The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder 
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * If the expansion uses this element, there is  no implication about the logical relationship between them, and the  struc
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetExpansionContains)
  contains?: ValueSetExpansionContains[];

  /**
   * The designations provided must be based on the value set and code system definitions.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetComposeIncludeConceptDesignation)
  designation?: ValueSetComposeIncludeConceptDesignation[];

  /**
   * The recommended display for this item in the expansion.
   */
  @IsOptional()
  @IsString()
  display?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _display?: Element;

  /**
   * This should only have a value if the concept is inactive.
   */
  @IsOptional()
  @IsBoolean()
  inactive?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _inactive?: Element;

  /**
   * An absolute URI which is the code system in which the code for this item in the expansion is defined.
   */
  @IsOptional()
  @IsString()
  system?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _system?: Element;

  /**
   * The exact value of the version string is specified by the system from which the code is derived.
   */
  @IsOptional()
  @IsString()
  version?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _version?: Element;

  /**
   * Constructor for ValueSetExpansionContains
   */
  constructor(source: Partial<ValueSetExpansionContains> = {}) {
    super(source);
  }
}

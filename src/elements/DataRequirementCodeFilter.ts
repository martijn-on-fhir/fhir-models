import 'reflect-metadata';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Coding } from './Coding';

/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data.
 */
export class DataRequirementCodeFilter extends Element {
  /**
   * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  code?: Coding[];

  /**
   * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _path?: Element;

  /**
   * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
   */
  @IsOptional()
  @IsString()
  searchParam?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _searchParam?: Element;

  /**
   * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
   */
  @IsOptional()
  @IsString()
  valueSet?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueSet?: Element;

  /**
   * Constructor for DataRequirementCodeFilter
   */
  constructor(source: Partial<DataRequirementCodeFilter> = {}) {
    super(source);
  }
}
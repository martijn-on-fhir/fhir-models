import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ConceptMapGroupElementTargetDependsOn } from './ConceptMapGroupElementTargetDependsOn';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ConceptMapGroupElementTarget extends BackboneElement {
  /**
   * Identity (code or path) or the element/item that the map refers to.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConceptMapGroupElementTargetDependsOn)
  dependsOn?: ConceptMapGroupElementTargetDependsOn[];

  /**
   * The display is ignored when processing the map.
   */
  @IsOptional()
  @IsString()
  display?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _display?: Element;

  /**
   * This element is labeled as a modifier because it may indicate that a target does not apply.
   */
  @IsOptional()
  @IsIn(['relatedto', 'equivalent', 'equal', 'wider', 'subsumes', 'narrower', 'specializes', 'inexact', 'unmatched', 'disjoint'])
  equivalence?: ('relatedto'|'equivalent'|'equal'|'wider'|'subsumes'|'narrower'|'specializes'|'inexact'|'unmatched'|'disjoint');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _equivalence?: Element;

  /**
   * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified elemen
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConceptMapGroupElementTargetDependsOn)
  product?: ConceptMapGroupElementTargetDependsOn[];

  /**
   * Constructor for ConceptMapGroupElementTarget
   */
  constructor(source: Partial<ConceptMapGroupElementTarget> = {}) {
    super(source);
  }
}

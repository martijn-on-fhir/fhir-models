import 'reflect-metadata';
import { IsOptional, IsString, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';

/**
 * Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.
 */
export class ElementDefinitionConstraint extends Element {
  /**
   * In the absense of an expression, the expression is likely not enforceable by validators, and might be missed by many systems.
   */
  @IsOptional()
  @IsString()
  expression?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expression?: Element;

  /**
   * Should be expressed in business terms as much as possible.
   */
  @IsString()
  human: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _human?: Element;

  /**
   * Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
   */
  @IsString()
  key: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _key?: Element;

  /**
   * To be used if the reason for the constraint might not be intuitive to all implementers.
   */
  @IsOptional()
  @IsString()
  requirements?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _requirements?: Element;

  /**
   * This allows constraints to be asserted as "shall" (error) and "should" (warning).
   */
  @IsIn(['error', 'warning'])
  severity: 'error' | 'warning';

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _severity?: Element;

  /**
   * This is used when, e.g. rendering, where it is not useful to present inherited constraints when rendering the snapshot.
   */
  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _source?: Element;

  /**
   * Elements SHALL use "f" as the namespace prefix for the FHIR namespace, and "x" for the xhtml namespace, and SHALL NOT use any other prefixes.     Note: XPath is generally considered not useful because it does not apply to JSON and other formats and because of XSLT implementation issues, and may be removed in the future.
   */
  @IsOptional()
  @IsString()
  xpath?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _xpath?: Element;

  /**
   * Constructor for ElementDefinitionConstraint
   */
  constructor(source: Partial<ElementDefinitionConstraint> = {}) {
    super(source);
  }
}
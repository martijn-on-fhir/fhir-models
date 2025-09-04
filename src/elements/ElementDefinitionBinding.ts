import 'reflect-metadata';
import { IsOptional, IsString, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';

/**
 * Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri).
 */
export class ElementDefinitionBinding extends Element {
  /**
   * Describes the intended use of this particular set of codes.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * For further discussion, see [Using Terminologies](terminologies.html).
   */
  @IsIn(['required', 'extensible', 'preferred', 'example'])
  strength: 'required' | 'extensible' | 'preferred' | 'example';

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _strength?: Element;

  /**
   * The reference may be version-specific or not (e.g. have a |[version] at the end of the canonical URL).
   */
  @IsOptional()
  @IsString()
  valueSet?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueSet?: Element;

  /**
   * Constructor for ElementDefinitionBinding
   */
  constructor(source: Partial<ElementDefinitionBinding> = {}) {
    super(source);
  }
}
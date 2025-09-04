import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiti
 */
export class Expression extends Element {
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * An expression in the specified language that returns a value.
   */
  @IsOptional()
  @IsString()
  expression?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expression?: Element;

  /**
   * The media type of the language for the expression.
   */
  @IsOptional()
  @IsString()
  language: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _language?: Element;

  /**
   * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * If both a reference and an expression is found, the reference SHALL point to the same expression.
   */
  @IsOptional()
  @IsString()
  reference?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _reference?: Element;

  /**
   * Constructor for Expression
   */
  constructor(source: Partial<Expression> = {}) {
    super(source);
  }
}

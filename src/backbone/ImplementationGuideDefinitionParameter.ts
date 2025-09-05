import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImplementationGuideDefinitionParameter extends BackboneElement {
  /**
   * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-j
   */
  @IsOptional()
  @IsIn(['apply', 'path-resource', 'path-pages', 'path-tx-cache', 'expansion-parameter', 'rule-broken-links', 'generate-xml', 'generate-json', 'generate-turtle', 'html-template'])
  code?: ('apply'|'path-resource'|'path-pages'|'path-tx-cache'|'expansion-parameter'|'rule-broken-links'|'generate-xml'|'generate-json'|'generate-turtle'|'html-template');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * Value for named type.
   */
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _value?: Element;

  /**
   * Constructor for ImplementationGuideDefinitionParameter
   */
  constructor(source: Partial<ImplementationGuideDefinitionParameter> = {}) {
    super(source);
  }
}
